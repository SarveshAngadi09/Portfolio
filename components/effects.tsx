"use client"

import { useEffect } from "react"

// Page-wide effects: cursor spotlight on `.glow-card` and fade-in of `.reveal` on scroll.
export function Effects() {
  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      const card = (e.target as Element | null)?.closest?.(".glow-card") as HTMLElement | null
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      card.style.setProperty("--my", `${e.clientY - rect.top}px`)
    }
    document.addEventListener("pointermove", onPointerMove, { passive: true })

    const root = document.documentElement
    root.classList.add("reveal-ready")
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))

    return () => {
      document.removeEventListener("pointermove", onPointerMove)
      observer.disconnect()
      root.classList.remove("reveal-ready")
    }
  }, [])

  return null
}
