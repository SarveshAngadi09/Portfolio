import { Github, Linkedin, ArrowDown, Download } from "lucide-react"
import { ReconstructionCanvas } from "./reconstruction-canvas"
import { Typewriter } from "./typewriter"

const stats = [
  { value: "5+", label: "Years industry R&D" },
  { value: "2", label: "Accepted papers" },
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16">
      {/* Backdrop: grid plus two soft colour glows */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] lg:left-1/4"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="hidden sm:inline">MSc Robotics @ </span>UTwente · graduating Feb 2027
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Sarvesh <span className="text-gradient">Angadi</span>
          </h1>
          <h2 className="mt-5 text-lg font-medium text-foreground/80 sm:text-xl">
            Computer Vision & Robotics Engineer — 3D Perception & Foundation Models
          </h2>
          <p className="mt-4 font-mono text-sm text-muted-foreground sm:text-base">
            <span className="text-primary">{">"}</span> I build{" "}
            <Typewriter
              words={[
                "3D reconstruction systems",
                "robust vision foundation models",
                "robot perception pipelines",
                "real-time vision on the edge",
              ]}
            />
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="./Sarvesh_Angadi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-gradient-brand inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="https://github.com/sarveshangadi09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sarvesh-angadi-067375154/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:max-w-xs lg:mx-0 mx-auto">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-gradient text-3xl font-bold">{stat.value}</dd>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <ReconstructionCanvas className="aspect-square w-full cursor-grab active:cursor-grabbing" />
        </figure>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted-foreground lg:block"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
