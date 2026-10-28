"use client"

import { useEffect, useState } from "react"

// Types each word out, pauses, deletes it, and moves on to the next.
export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(words[0].length)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const word = words[index]
    let delay = deleting ? 35 : 70
    if (!deleting && length === word.length) delay = 1800
    if (deleting && length === 0) delay = 300

    const timer = setTimeout(() => {
      if (!deleting && length === word.length) {
        setDeleting(true)
      } else if (deleting && length === 0) {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else {
        setLength(length + (deleting ? -1 : 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [words, index, length, deleting])

  return (
    <span className="text-foreground">
      {words[index].slice(0, length)}
      <span className="caret ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] bg-primary" aria-hidden="true" />
    </span>
  )
}
