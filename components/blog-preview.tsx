import { ArrowRight } from "lucide-react"
import { SectionLabel } from "./about"

const posts = [
  {
    title: "Normalizing Flows: Density Estimation via Change of Variables",
    excerpt:
      "An intuitive and mathematical introduction to normalizing flows, explaining density estimation through invertible transformations and the change-of-variables formula.",
    date: "Feb 2026",
    readTime: "8 min read",
    tag: "Generative AI",
    link: "https://github.com/SarveshAngadi09/Robotics-CV/tree/main/NormalizingFlows",
  },
  {
    title: "Basics of Camera Calibration",
    excerpt:
      "An intuitive and mathematical introduction to intrinsic camera calibration, covering focal length, principal point estimation, and lens distortion modeling for accurate vision-based perception.",
    date: "Feb 2026",
    readTime: "6 min read",
    tag: "Calibration",
    link: "https://github.com/SarveshAngadi09/Robotics-CV/tree/main/Calibration",
  },
]

export function BlogPreview() {
  return (
    <section id="blog" className="bg-muted/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Blog" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Recent writing
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Technical notes and tutorials on topics I find interesting.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-base font-semibold leading-snug text-card-foreground">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
