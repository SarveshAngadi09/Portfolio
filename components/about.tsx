import { Eye, Brain, Camera, Cpu } from "lucide-react"

const highlights = [
  {
    icon: Eye,
    title: "Perception Systems",
    description: "Building real-time 3D perception pipelines for autonomous robots using LiDAR, stereo vision, and sensor fusion.",
  },
  {
    icon: Camera,
    title: "Camera Calibration",
    description: "Developing robust multi-camera calibration frameworks for accurate metric reconstruction in industrial environments.",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    description: "Designing and training CNNs and transformers for object detection, segmentation, and visual place recognition.",
  },
  {
    icon: Cpu,
    title: "Embedded Deployment",
    description: "Optimizing models for edge devices like NVIDIA Jetson, enabling real-time inference on resource-constrained hardware.",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="About" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Building intelligent machines that see and understand
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          I am a robotics engineer with a focus on computer vision and perception.
          My work sits at the intersection of classical geometry-based methods and modern deep learning,
          enabling autonomous systems to interpret complex visual scenes.
          I have contributed to research in camera calibration, visual SLAM, and learning-based
          perception deployed on real-world robotic platforms.
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
