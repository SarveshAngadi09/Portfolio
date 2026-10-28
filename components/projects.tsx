import { ExternalLink, Github } from "lucide-react"
import { SectionLabel } from "./about"

const projects = [
  {
    title: "Cross-Domain Generalization of VGGT-Ω",
    description:
      "MSc thesis improving the out-of-distribution depth and pose accuracy of a feed-forward 3D reconstruction foundation model. Adapts a frozen backbone with lightweight modules (Bridge causal modules, parameter-efficient fine-tuning) so the model holds up on domains it was not trained on.",
    stack: ["PyTorch", "VGGT-Ω", "DINOv3", "PEFT", "3D Reconstruction"],
    github: null,
    inProgress: true,
    statusLabel: "In Progress (MSc Thesis)",
  },
  {
    title: "Vision-Conditioned Trajectory Generation with Flow Matching",
    description:
      "Conditional and mean flow matching models for vision-conditioned robotic trajectory generation. Trained and evaluated on the PushT dataset, demonstrating smooth, multimodal trajectory distributions guided by visual observations.",
    stack: ["PyTorch", "Flow Matching", "Robot Learning"],
    github: "https://github.com/SarveshAngadi09/TrajectoryGenerationFlowmatching",
    inProgress: false,
  },
  {
    title: "Adversarial Attacks in Neural Networks",
    description:
      "Implementation and analysis of adversarial attack strategies (FGSM, PGD, C&W) and defence mechanisms to study robustness of deep neural networks under distribution shift.",
    stack: ["Python", "PyTorch", "OpenCV", "Deep Learning"],
    github: "https://github.com/SarveshAngadi09/DLadversarialattack",
    inProgress: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-muted/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="04" label="Projects" />
        <h2 className="mt-2 reveal text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Research and open-source implementations spanning 3D reconstruction, robustness, and generative models for robotics.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col glow-card reveal rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              {project.inProgress && (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-500">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500 motion-reduce:animate-none" />
                  {project.statusLabel ?? "In Progress"}
                </span>
              )}
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-card-foreground">{project.title}</h3>
                <div className="flex shrink-0 items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/SarveshAngadi09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all projects on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
