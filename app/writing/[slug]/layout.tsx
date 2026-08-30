import Link from 'next/link'

export default function WritingPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="pb-24">
      <Link
        href="/writing"
        className="mb-10 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">←</span>
        All writing
      </Link>
      <div className="prose prose-neutral max-w-none dark:prose-invert prose-h1:mb-2 prose-h1:font-display prose-h1:text-3xl prose-h1:font-normal prose-h1:tracking-tight prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:font-display prose-h2:text-2xl prose-h2:font-normal prose-h3:font-medium prose-p:leading-relaxed prose-strong:font-semibold prose-code:rounded prose-code:bg-sheet prose-code:px-1 prose-code:py-0.5 prose-code:text-[0.85em] prose-code:font-normal prose-code:text-accent-soft prose-pre:rounded-xl prose-pre:bg-sheet prose-pre:text-foreground prose-a:text-accent prose-a:no-underline prose-a:decoration-accent/40 prose-a:underline-offset-4 prose-a:transition-colors hover:prose-a:text-accent-soft prose-img:rounded-xl prose-blockquote:border-l-2 prose-blockquote:border-accent/40 prose-blockquote:text-muted">
        {children}
      </div>
    </article>
  )
}