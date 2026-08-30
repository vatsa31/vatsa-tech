import { cn } from '@/lib/utils'

export type MetricItem = {
  value: string
  label: string
}

export function MetricBand({
  items,
  className,
}: {
  items: MetricItem[]
  className?: string
}) {
  return (
    <dl
      className={cn(
        'grid grid-cols-1 overflow-hidden rounded-xl border border-line bg-paper sm:grid-cols-3',
        className,
      )}
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            'flex flex-col gap-1 px-5 py-5 max-sm:border-b max-sm:last:border-b-0 sm:px-6',
            index > 0 && 'sm:border-l sm:border-line',
          )}
        >
          <dd className="font-display text-4xl leading-none tracking-tight text-accent">
            {item.value}
          </dd>
          <dt className="text-sm leading-snug text-muted">{item.label}</dt>
        </div>
      ))}
    </dl>
  )
}