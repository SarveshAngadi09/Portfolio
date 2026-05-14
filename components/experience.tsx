import { SectionLabel } from "./about"
import { Layers, Zap, FlaskConical, MonitorPlay, FileText } from "lucide-react"

const contributions = [
  {
    icon: Layers,
    title: "Stereo & Multi-Camera Calibration",
    description:
      "Designed and shipped production calibration frameworks for stereo and multi-camera rigs used in visual authentication and depth sensing. Systems achieved sub-pixel reprojection accuracy and ran in real-time on embedded hardware.",
  },
  {
    icon: Zap,
    title: "Real-Time Depth & Visual Servoing",
    description:
      "Built real-time depth estimation and visual servoing pipelines in C++ and Python, enabling closed-loop robot control guided by live camera feedback. Deployed across multiple actuator platforms.",
  },
  {
    icon: FlaskConical,
    title: "Event-Based Imaging Research",
    description:
      "Conducted research into neuroscience-inspired event cameras for high-speed temporal sensing — improving motion capture and autofocus depth estimation beyond what frame-based sensors could achieve.",
  },
  {
    icon: MonitorPlay,
    title: "End-to-End Demos & Prototypes",
    description:
      "Built end-to-end demonstration systems showcasing real-time object recognition, depth-guided grasping, and visual authentication — translating research into tangible prototypes for industry partners and stakeholders.",
  },
  {
    icon: FileText,
    title: "Patent Writing",
    description:
      "Contributed to the writing of three patents covering event-based imaging, autofocus depth sensing, and robot calibration — working closely with R&D and legal teams to document novel technical contributions.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Industry Experience" />
        <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            CynLr — Cybernetics Laboratory
          </h2>
          <span className="font-mono text-sm text-muted-foreground">July 2020 – Aug 2025</span>
        </div>
        <p className="mt-2 text-base font-medium text-primary">Lead – Algorithms & Research</p>
        <p className="mt-4 text-base text-muted-foreground">
          Five years building production computer vision systems for intelligent robotics — from
          initial research through calibration, algorithm design, edge deployment, and patent writing.
          Worked across C++, Python, and LabVIEW on camera systems, depth sensors, and real-time
          vision pipelines. Delivered end-to-end demos and commercial prototypes for industry partners.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {contributions.map((item) => (
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
