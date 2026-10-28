import { BookOpen } from "lucide-react"
import { SectionLabel } from "./about"

const SELF = "S. Angadi"

const publications = [
  {
    title: "Trusting MedSAM under Distribution Shift",
    authors: ["S. Angadi", "A. Briassouli"],
    venue: "ACCV 2026 Workshop on Trustworthy Foundation Models in Imaging (TrustFMI)",
    status: "Accepted · Oral",
  },
  {
    title: "Geometry-Aware Trajectory State Modeling for Few-Shot Action Recognition",
    authors: [
      "Z. Miao",
      "M. Haralovic",
      "S. Levendeev",
      "S. Angadi",
      "J. Ferdous",
      "D.-C. Ploesteanu",
      "J. Guo",
      "E. Talavera",
    ],
    venue: "WACV 2027",
    status: "Accepted",
  },
]

export function Publications() {
  return (
    <section id="publications" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Publications" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Research
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Peer-reviewed work on the reliability of vision foundation models and few-shot video understanding.
        </p>

        <div className="mt-12 space-y-4">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-card-foreground">{pub.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {pub.authors.map((author, i) => (
                        <span key={author}>
                          {author === SELF ? (
                            <span className="font-semibold text-foreground">{author}</span>
                          ) : (
                            author
                          )}
                          {i < pub.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                    <p className="mt-1 text-sm italic text-muted-foreground/80">{pub.venue}</p>
                  </div>
                </div>
                <span className="shrink-0 self-start rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                  {pub.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
