import { ExternalLink, Github } from "lucide-react"
import { SectionLabel } from "./about"

const projects = [
  {
    title: "Vision-Conditioned Trajectory Generation with Flow Matching",
    description:
      "Implementing conditional and mean flow matching models for vision-conditioned robotic trajectory generation on the PushT dataset.",
    stack: ["Pytorch", "Path Planning", "GenAI", "Robotics"],
    github: "https://github.com/SarveshAngadi09/TrajectoryGenerationFlowmatching",
  },
  {
    title: "Adversarial Attacks in Neural Networks",
    description:
      "Implementation and analysis of adversarial attack strategies and defense mechanisms to study robustness in deep neural networks.",
    stack: ["Python", "Pytorch", "OpenCV", "Neural Networks"],
    github: "https://github.com/SarveshAngadi09/DLadversarialattack",
  },
  {
    title: "Mapping facial features and hand gestures",
    description:
      "Implementation of face and palm detection using mediapipe and openCV",
    stack: ["Python","mediapipe", "OpenCV"],
    github: "https://github.com/SarveshAngadi09/Face-Hand-Interaction-Computer-vision",
  },
  
]

export function Projects() {
  return (
    <section id="projects" className="bg-muted/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Projects" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Open-source projects and research implementations spanning perception, calibration, and deep learning for robotics.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-semibold text-card-foreground">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary/8 px-2 py-0.5 font-mono text-xs text-primary"
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
