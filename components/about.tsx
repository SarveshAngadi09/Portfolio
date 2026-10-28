import { Layers, ShieldCheck, Crosshair, Cpu, GraduationCap } from "lucide-react"

const highlights = [
  {
    icon: Layers,
    title: "3D Vision & Reconstruction",
    description: "Feed-forward 3D reconstruction (VGGT, DUSt3R), multi-view stereo, SfM, depth estimation, NeRF, Gaussian Splatting, and point cloud / LiDAR processing.",
  },
  {
    icon: ShieldCheck,
    title: "Foundation Models & Robustness",
    description: "Vision transformers (DINO, ViT) under distribution shift — domain generalization, OOD robustness, parameter-efficient fine-tuning, and few-shot and metric learning.",
  },
  {
    icon: Crosshair,
    title: "Robot Perception",
    description: "Stereo and robot calibration, visual servoing, 6DoF pose estimation, sensor fusion, and perception for grasping and manipulation — taken from prototype to product.",
  },
  {
    icon: Cpu,
    title: "Edge Deployment",
    description: "ONNX/TensorRT model optimization and deployment on NVIDIA Jetson hardware. Real-time vision at the edge for latency-critical robotic systems.",
  },
]

const education = [
  {
    degree: "MSc Robotics (Algorithms and Software AI)",
    school: "University of Twente, Enschede, Netherlands",
    detail: "Grade 7.83 · Expected Feb 2027",
  },
  {
    degree: "B.Tech Electronics and Communication Engineering",
    school: "Ramaiah Institute of Technology, Bengaluru, India",
    detail: "CGPA 8.34",
  },
]

const skills = [
  "Python",
  "C++",
  "PyTorch",
  "OpenCV",
  "ROS2",
  "ONNX / TensorRT",
  "Docker",
  "MATLAB",
  "LabVIEW",
  "Git · CI/CD",
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="01" label="About" />
        <h2 className="mt-2 reveal text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Robust 3D perception, from research to edge hardware
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          I am a computer vision and robotics engineer completing an MSc in Robotics at the University
          of Twente (Feb 2027), with over five years of industry experience in computer vision and deep
          learning for robotics. As Lead of Algorithms & Research at CynLr (Cybernetics Laboratory), I
          built stereo and robot calibration pipelines, real-time depth estimation, and visual servoing
          systems that went from research prototypes to commercial products.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          My research now focuses on the out-of-distribution robustness of vision foundation models. My
          MSc thesis studies cross-domain generalization of feed-forward 3D reconstruction (VGGT-Ω), and
          I have two accepted papers — an oral presentation at the ACCV 2026 Workshop on Trustworthy
          Foundation Models in Imaging, and WACV 2027.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group glow-card reveal rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Education</h3>
            <ul className="mt-4 space-y-5">
              {education.map((item) => (
                <li key={item.degree} className="flex gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">{item.school}</p>
                    <p className="font-mono text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Toolkit</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ label, index }: { label: string; index?: string }) {
  return (
    <div className="reveal flex items-center gap-3 font-mono text-sm tracking-widest uppercase">
      {index && <span className="text-muted-foreground">{index}</span>}
      <span className="bg-gradient-brand h-px w-8" />
      <span className="text-primary">{label}</span>
    </div>
  )
}

export { SectionLabel }
