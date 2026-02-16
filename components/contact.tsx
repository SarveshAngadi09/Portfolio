import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { SectionLabel } from "./about"

const socials = [
  { label: "GitHub", href: "https://github.com/SarveshAngadi09", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sarvesh-angadi-067375154/", icon: Linkedin },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Contact" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"Let's connect"}
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          {"Interested in hiring me, collaboration, research opportunities, or just want to say hello? I'd love to hear from you."}
        </p>

        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-16">
          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Email</h3>
            <a
              href="mailto:sarvesh.angadi1997@gmail.com"
              className="mt-2 inline-flex items-center gap-2 text-base text-primary transition-colors hover:text-primary/80"
            >
              <Mail className="h-4 w-4" />
              sarvesh.angadi1997@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Social</h3>
            <ul className="mt-2 flex items-center gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    aria-label={s.label}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
