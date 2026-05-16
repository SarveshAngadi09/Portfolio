"use client"

import { useState } from "react"
import { Mail, GithubIcon, LinkedinIcon, Send, BookOpen } from "lucide-react"
import { SectionLabel } from "./about"

const socials = [
  { label: "GitHub", href: "https://github.com/sarveshangadi09", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sarvesh-angadi-067375154/", icon: LinkedinIcon },
  { label: "Substack", href: "https://sarveshangadi.substack.com", icon: BookOpen },
]

export function Contact() {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = `Hi Sarvesh,\n\n${message}\n\nBest,\n${name}`
    const mailto = `mailto:sarvesh.angadi1997@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

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

        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
              <input
                id="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What's this about?"
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className="resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {sent ? "Opening email client…" : (<><Send className="h-4 w-4" /> Send Message</>)}
            </button>
          </form>

          {/* Direct contact */}
          <div className="flex flex-col gap-8">
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
      </div>
    </section>
  )
}
