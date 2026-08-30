import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type SectionTitleProps = {
  number: string
  label: string
  title?: string
  className?: string
}

export function SectionNumber({ number, label }: SectionTitleProps) {
  return (
    <p className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="text-accent">{number}</span>
      <span>{label}</span>
    </p>
  )
}

export function SectionTitle({
  number,
  label,
  title,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-8', className)}>
      <SectionNumber number={number} label={label} />
      {title ? (
        <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      ) : null}
    </div>
  )
}

export function Section({
  number,
  label,
  title,
  className,
  id,
  children,
}: {
  number: string
  label: string
  title?: string
  className?: string
  id?: string
  children: React.ReactNode
}) {
  return (
    <Reveal id={id} className={cn('py-14 sm:py-16', className)}>
      <SectionTitle number={number} label={label} title={title} />
      {children}
    </Reveal>
  )
}