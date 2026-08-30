import Link from 'next/link'
import { cn } from '@/lib/utils'

export function CaseHeader({
  index,
  context,
  period,
  title,
  summary,
  tags,
}: {
  index: string
  context: string
  period: string
  title: string
  summary: string
  tags?: string[]
}) {
  return (
    <header className="pb-14 pt-10 sm:pb-16">
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">{index}</span>
        <span>{context}</span>
        <span aria-hidden="true">·</span>
        <span>{period}</span>
      </p>
      <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {summary}
      </p>
      {tags && tags.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  )
}

export function CaseSection({
  n,
  title,
  lead,
  children,
  className,
}: {
  n: string
  title: string
  lead?: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <section id={n} className={cn('scroll-mt-24 border-t border-line py-12', className)}>
      <p className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">{n}</span>
        <span>{title}</span>
      </p>
      <div className="mt-5 max-w-2xl">
        {lead ? <p className="text-lg leading-relaxed text-foreground">{lead}</p> : null}
        <div className="prose prose-neutral max-w-none dark:prose-invert prose-p:leading-relaxed prose-a:text-accent prose-a:decoration-accent/40 prose-a:underline-offset-4 prose-strong:font-semibold">
          {children}
        </div>
      </div>
    </section>
  )
}

export function CaseGrid({
  rows,
  className,
}: {
  rows: { k: string; v: string }[]
  className?: string
}) {
  return (
    <dl className={cn('mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2', className)}>
      {rows.map((row) => (
        <div key={row.k} className="bg-paper p-4">
          <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            {row.k}
          </dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-foreground">{row.v}</dd>
        </div>
      ))}
    </dl>
  )
}

export function CaseList({
  items,
  marker = '-',
  className,
}: {
  items: string[]
  marker?: string
  className?: string
}) {
  return (
    <ul className={cn('mt-4 space-y-2.5', className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-foreground">
          <span
            className="shrink-0 font-mono text-xs leading-relaxed text-accent"
            aria-hidden="true"
          >
            {marker}
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function CasePull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 max-w-xl border-l-2 border-accent/50 pl-5 font-display text-2xl italic leading-snug text-foreground">
      {children}
    </blockquote>
  )
}

export function CaseRelated({
  items,
  className,
}: {
  items: { label: string; href: string; note?: string }[]
  className?: string
}) {
  return (
    <div className={cn('mt-4', className)}>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-baseline gap-2 text-[15px] text-foreground transition-colors hover:text-accent"
            >
              <span className="font-mono text-xs text-accent" aria-hidden="true">
                →
              </span>
              <span className="underline decoration-line-strong underline-offset-4 transition-colors group-hover:decoration-accent">
                {item.label}
              </span>
              {item.note ? (
                <span className="font-mono text-xs text-faint">{item.note}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-baseline gap-2 text-[15px] text-foreground transition-colors hover:text-accent',
        className,
      )}
    >
      <span className="font-mono text-xs text-accent" aria-hidden="true">
        →
      </span>
      <span className="underline decoration-line-strong underline-offset-4 transition-colors group-hover:decoration-accent">
        {children}
      </span>
    </a>
  )
}