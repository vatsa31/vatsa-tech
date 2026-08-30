import Link from 'next/link'

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="pb-10">
      <Link
        href="/"
        className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">←</span>
        Back home
      </Link>
      {children}
    </article>
  )
}