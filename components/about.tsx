import { Layers, Crosshair, Cpu, Brain } from "lucide-react"

const highlights = [
  {
    icon: Layers,
    title: "Stereo & 3D Perception",
    description: "Multi-camera calibration, stereo vision, MVS, depth estimation, and point cloud processing for accurate metric 3D reconstruction in industrial environments.",
  },
  {
    icon: Crosshair,
    title: "6DoF Pose & Grasping",
    description: "End-to-end pose estimation pipelines for industrial grasping — from synthetic data generation through sim-to-real transfer to production deployment.",
  },
  {
    icon: Cpu,
    title: "Edge Deployment",
    description: "ONNX/TensorRT model optimization and deployment on NVIDIA Jetson hardware. Real-time vision at the edge for latency-critical robotic systems.",
  },
  {
    icon: Brain,
    title: "Deep Learning for Robotics",
    description: "Transformer architectures (ViT, VLM, VLA), diffusion models, and metric learning applied to robot perception — from detection and tracking to trajectory generation.",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="About" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Production-grade robot perception, from lab to edge hardware
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          I am a Robotics MSc student at the University of Twente (graduating 2025) with over five years
          of production experience building computer vision systems at CynLr (Cybernetics Laboratory).
          As Lead of Algorithms & Research, I shipped stereo calibration frameworks, real-time depth
          estimation pipelines, and visual servoing systems that went from research prototypes to
          commercial products — including involvement in patent writing covering event-based imaging,
          autofocus depth, and robot calibration. My current focus is 6DoF object pose estimation
          for industrial grasping, combining classical 3D geometry with modern transformer-based
          architectures and deploying on NVIDIA Jetson edge hardware.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className="font-mono text-sm tracking-widest text-primary uppercase">{label}</span>
    </div>
  )
}

export { SectionLabel }
