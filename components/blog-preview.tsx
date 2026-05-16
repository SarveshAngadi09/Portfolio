import { ArrowRight, ExternalLink } from "lucide-react"
import { SectionLabel } from "./about"

const SUBSTACK_URL = "https://sarveshangadi.substack.com"

const posts = [
  {
    title: "Basics of Camera Calibration",
    excerpt:
      "Intrinsic calibration — focal length, principal point, and why they matter for accurate vision-based perception.",
    date: "Feb 2026",
    readTime: "6 min read",
    tag: "Calibration",
    link: "https://sarveshangadi.substack.com/p/basics-of-camera-calibration",
  },
  {
    title: "Normalizing Flows — The Intuition",
    excerpt:
      "Part 1: building intuition behind normalizing flows — what they are, why they work, and how invertible transformations enable density estimation.",
    date: "Feb 2026",
    readTime: "6 min read",
    tag: "Generative AI",
    link: "https://sarveshangadi.substack.com/p/normalizing-flows-the-intuition",
  },
  {
    title: "Normalizing Flows — The Math",
    excerpt:
      "Part 2: the mathematical foundations of normalizing flows — change of variables, the Jacobian determinant, and how to compute exact likelihoods.",
    date: "Feb 2026",
    readTime: "8 min read",
    tag: "Generative AI",
    link: "https://sarveshangadi.substack.com/p/normalizing-flows-the-math",
  },
]

export function BlogPreview() {
  return (
    <section id="blog" className="bg-muted/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Blog" />
        <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent writing
          </h2>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all on Substack
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="mt-4 text-base text-muted-foreground">
          Technical notes and tutorials on computer vision, robotics, and deep learning — published on Substack.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  Read on Substack
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
