import Link from 'next/link'

export function ArticleHeader({
  title,
  date,
  minutes,
  children,
}: {
  title: string
  date?: string
  minutes: number
  children: React.ReactNode
}) {
  return (
    <article className="pb-28">
      <Link
        href="/writing"
        className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
      >
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-x-0.5"
        >
          ←
        </span>
        All writing
      </Link>

      <header className="mt-12 border-b border-line pb-10">
        <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
          <span>{date}</span>
          <span aria-hidden="true">·</span>
          <span>{minutes} min read</span>
          <span aria-hidden="true">·</span>
          <span>Shrivatsa Kashyap</span>
        </p>
      </header>

      <div className="article-prose prose prose-neutral prose-lg mt-10 max-w-none dark:prose-invert">
        {children}
      </div>
    </article>
  )
}