"use client"

import { useEffect, useRef } from "react"

type Vec3 = [number, number, number]

const KNOT_POINTS = 2400
const GROUND_POINTS = 520
const CAMERAS = 8
const CAMERA_RING = 2.2
const CAMERA_HEIGHT = 0.7
const VIEW_DISTANCE = 7
const PALETTE_STEPS = 24

function sub(a: Vec3, b: Vec3): Vec3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
}
function cross(a: Vec3, b: Vec3): Vec3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
}
function normalize(a: Vec3): Vec3 {
  const l = Math.hypot(a[0], a[1], a[2]) || 1
  return [a[0] / l, a[1] / l, a[2] / l]
}

// Deterministic PRNG so the cloud looks the same on every load.
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function trefoil(t: number): Vec3 {
  const s = 0.42
  const r = 2 + Math.cos(3 * t)
  return [s * r * Math.cos(2 * t), s * r * Math.sin(2 * t), s * -Math.sin(3 * t)]
}

function buildScene() {
  const rand = mulberry32(7)

  // Points sampled on a tube around a trefoil knot: the "reconstructed object".
  const knot: Vec3[] = []
  for (let i = 0; i < KNOT_POINTS; i++) {
    const t = rand() * Math.PI * 2
    const phi = rand() * Math.PI * 2
    const c = trefoil(t)
    const tangent = normalize(sub(trefoil(t + 1e-3), c))
    const binormal = normalize(cross(tangent, c))
    const normal = cross(binormal, tangent)
    const radius = 0.26 + (rand() - 0.5) * 0.03
    knot.push([
      c[0] + radius * (Math.cos(phi) * normal[0] + Math.sin(phi) * binormal[0]),
      c[1] + radius * (Math.cos(phi) * normal[1] + Math.sin(phi) * binormal[1]),
      c[2] + radius * (Math.cos(phi) * normal[2] + Math.sin(phi) * binormal[2]),
    ])
  }

  // Sparse ground plane under the object.
  const ground: Vec3[] = []
  for (let i = 0; i < GROUND_POINTS; i++) {
    const r = Math.sqrt(rand()) * 2.1
    const a = rand() * Math.PI * 2
    ground.push([r * Math.cos(a), -1.55, r * Math.sin(a)])
  }

  // Scattered start positions for the "assembling" intro, plus per-point delays.
  const start: Vec3[] = knot.map(() => {
    const u = rand() * 2 - 1
    const a = rand() * Math.PI * 2
    const r = 2.5 + rand() * 2.5
    const s = Math.sqrt(1 - u * u)
    return [r * s * Math.cos(a), r * u, r * s * Math.sin(a)]
  })
  const delay = knot.map(() => rand() * 0.7)

  // Camera frustums on a ring, all looking at the origin.
  const cameras = Array.from({ length: CAMERAS }, (_, i) => {
    const a = (i / CAMERAS) * Math.PI * 2
    const eye: Vec3 = [CAMERA_RING * Math.cos(a), CAMERA_HEIGHT, CAMERA_RING * Math.sin(a)]
    const forward = normalize(sub([0, 0, 0], eye))
    const right = normalize(cross(forward, [0, 1, 0]))
    const up = cross(right, forward)
    const d = 0.38
    const w = 0.2
    const h = 0.14
    const corners: Vec3[] = [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ].map(([sx, sy]) => [
      eye[0] + forward[0] * d + right[0] * w * sx + up[0] * h * sy,
      eye[1] + forward[1] * d + right[1] * w * sx + up[1] * h * sy,
      eye[2] + forward[2] * d + right[2] * w * sx + up[2] * h * sy,
    ])
    const rays = Array.from({ length: 10 }, () => Math.floor(rand() * KNOT_POINTS))
    return { eye, corners, rays }
  })

  return { knot, ground, start, delay, cameras }
}

function readHsl(name: string): [number, number, number] {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const [h, s, l] = raw.split(/\s+/).map((v) => parseFloat(v))
  return [h || 0, s || 0, l || 0]
}

export function ReconstructionCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const scene = buildScene()
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let size = 0
    let dpr = 1
    // View state: auto-rotation plus drag with a little inertia.
    let yaw = 0.6
    let pitch = 0.32
    let yawVelocity = 0
    let dragging = false
    let lastX = 0
    let lastY = 0
    const projected = new Float32Array(3)

    let palette: string[] = []
    let lineColor = ""
    let activeColor = ""
    let isDark = true
    function readTheme() {
      isDark = document.documentElement.classList.contains("dark")
      const a = readHsl("--primary")
      const b = readHsl("--accent")
      palette = Array.from({ length: PALETTE_STEPS }, (_, i) => {
        const k = i / (PALETTE_STEPS - 1)
        return `hsl(${a[0] + (b[0] - a[0]) * k} ${a[1] + (b[1] - a[1]) * k}% ${a[2] + (b[2] - a[2]) * k}%)`
      })
      lineColor = `hsl(${b[0]} ${b[1]}% ${b[2]}% / ${isDark ? 0.45 : 0.55})`
      activeColor = `hsl(${a[0]} ${a[1]}% ${a[2]}%)`
      if (reducedMotion && size) draw(Infinity)
    }
    readTheme()
    const themeObserver = new MutationObserver(readTheme)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      size = Math.min(rect.width, rect.height)
      canvas!.width = Math.round(rect.width * dpr)
      canvas!.height = Math.round(rect.height * dpr)
      if (reducedMotion) draw(Infinity)
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)


    function onPointerDown(e: PointerEvent) {
      dragging = true
      lastX = e.clientX
      lastY = e.clientY
      canvas!.setPointerCapture(e.pointerId)
    }
    function onPointerMove(e: PointerEvent) {
      if (!dragging) return
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      lastX = e.clientX
      lastY = e.clientY
      yaw += dx * 0.008
      yawVelocity = dx * 0.008 * 60
      pitch = Math.max(-0.2, Math.min(1.1, pitch + dy * 0.005))
      if (reducedMotion) draw(Infinity)
    }
    function onPointerUp() {
      dragging = false
    }
    canvas.addEventListener("pointerdown", onPointerDown)
    canvas.addEventListener("pointermove", onPointerMove)
    canvas.addEventListener("pointerup", onPointerUp)
    canvas.addEventListener("pointercancel", onPointerUp)

    function project(p: Vec3) {
      const cy = Math.cos(yaw)
      const sy = Math.sin(yaw)
      const x1 = p[0] * cy - p[2] * sy
      const z1 = p[0] * sy + p[2] * cy
      const cp = Math.cos(pitch)
      const sp = Math.sin(pitch)
      const y2 = p[1] * cp - z1 * sp
      const z2 = p[1] * sp + z1 * cp
      const depth = z2 + VIEW_DISTANCE
      const f = (size * 1.5) / depth
      projected[0] = (canvas!.width / dpr) / 2 + x1 * f
      projected[1] = (canvas!.height / dpr) / 2 - y2 * f
      projected[2] = z2
      return projected
    }

    function draw(elapsed: number) {
      const w = canvas!.width / dpr
      const h = canvas!.height / dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, w, h)
      ctx!.globalCompositeOperation = isDark ? "lighter" : "source-over"

      // Ground plane
      for (const p of scene.ground) {
        const [x, y, z] = project(p)
        const near = 1 - (z + 2.2) / 4.4
        ctx!.globalAlpha = 0.12 + near * 0.25
        ctx!.fillStyle = palette[PALETTE_STEPS - 1]
        ctx!.fillRect(x, y, 1.2, 1.2)
      }

      // Camera frustums; one at a time "captures" and casts rays to the object.
      const active = Math.floor(elapsed / 1.1) % CAMERAS
      const assembled = Math.min(1, elapsed / 2.2)
      ctx!.lineWidth = 1
      scene.cameras.forEach((cam, i) => {
        const isActive = i === active && assembled >= 1
        const eye = project(cam.eye)
        const ex = eye[0]
        const ey = eye[1]
        const corners = cam.corners.map((c) => {
          const q = project(c)
          return [q[0], q[1]] as const
        })
        ctx!.globalAlpha = isActive ? 1 : 0.7
        ctx!.strokeStyle = isActive ? activeColor : lineColor
        ctx!.beginPath()
        for (const [cx, cy] of corners) {
          ctx!.moveTo(ex, ey)
          ctx!.lineTo(cx, cy)
        }
        ctx!.moveTo(corners[0][0], corners[0][1])
        for (let k = 1; k <= 4; k++) ctx!.lineTo(corners[k % 4][0], corners[k % 4][1])
        ctx!.stroke()

        if (isActive) {
          const phase = (elapsed % 1.1) / 1.1
          ctx!.globalAlpha = 0.35 * Math.sin(phase * Math.PI)
          ctx!.beginPath()
          for (const idx of cam.rays) {
            const target = project(scene.knot[idx])
            ctx!.moveTo(ex, ey)
            ctx!.lineTo(target[0], target[1])
          }
          ctx!.stroke()
        }
      })

      // Object point cloud, assembling from a scattered cloud on first load.
      for (let i = 0; i < scene.knot.length; i++) {
        const target = scene.knot[i]
        let p = target
        const local = Math.min(1, Math.max(0, (elapsed - scene.delay[i]) / 1.5))
        if (local < 1) {
          const e = 1 - Math.pow(1 - local, 3)
          const s = scene.start[i]
          p = [s[0] + (target[0] - s[0]) * e, s[1] + (target[1] - s[1]) * e, s[2] + (target[2] - s[2]) * e]
        }
        const [x, y, z] = project(p)
        const near = Math.min(1, Math.max(0, 1 - (z + 1.6) / 3.2))
        ctx!.globalAlpha = (0.25 + near * 0.75) * (0.3 + 0.7 * local)
        ctx!.fillStyle = palette[Math.round((1 - near) * (PALETTE_STEPS - 1))]
        const r = 0.9 + near * 1.1
        ctx!.fillRect(x - r / 2, y - r / 2, r, r)
      }

      ctx!.globalAlpha = 1
      ctx!.globalCompositeOperation = "source-over"
    }

    let frame = 0
    let running = false
    let startTime = 0
    let lastTime = 0
    function loop(now: number) {
      if (!startTime) startTime = now
      const dt = Math.min(0.05, (now - (lastTime || now)) / 1000)
      lastTime = now
      if (!dragging) {
        yawVelocity *= Math.pow(0.04, dt)
        yaw += (0.18 + yawVelocity) * dt
      }
      draw((now - startTime) / 1000)
      frame = requestAnimationFrame(loop)
    }
    function start() {
      if (running || reducedMotion) return
      running = true
      lastTime = 0
      frame = requestAnimationFrame(loop)
    }
    function stop() {
      running = false
      cancelAnimationFrame(frame)
    }

    // Only animate while the hero is on screen.
    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    visibility.observe(canvas)
    if (reducedMotion) draw(Infinity)

    return () => {
      stop()
      visibility.disconnect()
      resizeObserver.disconnect()
      themeObserver.disconnect()
      canvas.removeEventListener("pointerdown", onPointerDown)
      canvas.removeEventListener("pointermove", onPointerMove)
      canvas.removeEventListener("pointerup", onPointerUp)
      canvas.removeEventListener("pointercancel", onPointerUp)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ touchAction: "pan-y" }}
      role="img"
      aria-label="Animated 3D point cloud of a trefoil knot being reconstructed from a ring of cameras"
    />
  )
}
