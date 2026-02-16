import { Presentation, Calendar, Github } from "lucide-react"
import { SectionLabel } from "./about"

const talks = [
  {
    title: "Vision-Driven Robotics: Theory to Practice",
    venue: "Discord",
    date: "Feb 2026",
    type: "Teaching",
    github: "https://github.com/SarveshAngadi09/Robotics-CV", // Add specific repo link if needed
    description:
      "I conduct independent sessions on Computer Vision and Robotics fundamentals for students and early learners. The sessions focus on building strong intuition behind core concepts such as camera calibration, multi-view geometry, deep learning for perception, and generative models for robotics. My goal is to bridge theory and implementation — breaking down complex ideas into clear mathematical reasoning and practical code examples.",
  }
]

export function Teaching() {
  return (
    <section id="teaching" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Teaching & Talks" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Workshops & presentations
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Sharing knowledge through workshops, talks, and seminars on computer vision, robotics, and deep learning.
        </p>

        <div className="mt-12 space-y-4">
          {talks.map((talk, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Presentation className="h-3 w-3" />
                      {talk.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {talk.date}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-card-foreground">
                    {talk.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {talk.venue}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
                    {talk.description}
                  </p>

                  {/* GitHub Link */}
                  <a
                    href= "https://github.com/SarveshAngadi09/Robotics-CV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    View Materials on GitHub
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
