export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Alex Mercer. All rights reserved."}
        </p>
        <p className="font-mono text-xs text-muted-foreground/60">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
