import { cn } from '@/lib/utils'

type Tone = 'healthy' | 'warning' | 'critical'

function toneFor(remaining: number): Tone {
  if (remaining <= 10) return 'critical'
  if (remaining <= 20) return 'warning'
  return 'healthy'
}

const toneText: Record<Tone, string> = {
  healthy: 'text-foreground',
  warning: 'text-accent',
  critical: 'text-red-600 dark:text-red-400',
}

const toneFill: Record<Tone, string> = {
  healthy: 'bg-foreground',
  warning: 'bg-accent-soft',
  critical: 'bg-red-600 dark:bg-red-400',
}

function LimitBar({
  label,
  remaining,
}: {
  label: string
  remaining: number
}) {
  const tone = toneFor(remaining)
  return (
    <div className="px-4 py-3 max-sm:border-t max-sm:border-line sm:border-l sm:border-line">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] text-muted">{label}</span>
        <strong className={cn('font-mono text-xs', toneText[tone])}>
          {remaining}%
        </strong>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
        <div
          className={cn('h-full rounded-full', toneFill[tone])}
          style={{ width: `${remaining}%` }}
        />
      </div>
    </div>
  )
}

function TrayChip() {
  return (
    <div className="flex items-center justify-center rounded-t-xl border border-b-0 border-line bg-sheet px-5 py-2">
      <span className="font-mono text-[11px] tracking-tight text-muted">
        Cx&nbsp;64&nbsp;·&nbsp;Cu&nbsp;38
      </span>
      <span className="mx-2 h-3 w-px bg-line" aria-hidden="true" />
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
    </div>
  )
}

export function UsagentMock() {
  return (
    <figure>
      <div className="overflow-hidden rounded-xl border border-line bg-paper">
        <div className="flex items-center gap-1.5 border-b border-line bg-sheet px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            usagent popover
          </span>
          <span className="ml-auto" aria-hidden="true" />
          <TrayChip />
        </div>

        <div className="px-5 pb-5 pt-4">
          <header className="flex items-center justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm text-accent">u/</span>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                  agent usage monitor
                </p>
                <h3 className="text-lg font-medium leading-none tracking-tight">
                  Usage
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                live
              </span>
              <button
                type="button"
                aria-hidden="true"
                className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-muted"
                tabIndex={-1}
              >
                ↻ refresh
              </button>
            </div>
          </header>

          <nav className="mt-4 flex gap-1">
            <span className="rounded-lg bg-sheet px-3 py-1.5 font-mono text-[11px] text-muted">
              Codex
            </span>
            <span className="flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-1.5 font-mono text-[11px] text-paper">
              Cursor
              <span className="font-mono text-[10px] text-accent">38%</span>
            </span>
          </nav>

          <div className="mt-4 rounded-lg border border-line">
            <div className="flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sheet font-mono text-[10px] text-muted">
                  CU
                </span>
                <div>
                  <p className="text-xs font-medium leading-none">Cursor account</p>
                  <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-faint">
                    individual · plan
                  </p>
                </div>
              </div>
              <span className="font-mono text-[10px] text-muted">
                synced 2m ago
              </span>
            </div>

            <div className="border-t border-line px-4 py-3">
              <LimitBar label="Premium - this month" remaining={38} />
            </div>

            <div className="border-t border-line">
              <div className="px-4 pt-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                  your seat · individual usage
                </p>
              </div>
              <div className="py-2">
                <LimitBar label="Default usage" remaining={38} />
                <LimitBar label="On-demand usage" remaining={100} />
              </div>
            </div>

            <div className="border-t border-line py-2">
              <LimitBar label="Team pool" remaining={71} />
            </div>

            <div className="flex items-center justify-between border-t border-line px-4 py-2.5">
              <span className="font-mono text-[10px] text-faint">
                Data stays local to this Mac.
              </span>
              <button
                type="button"
                aria-hidden="true"
                className="font-mono text-[10px] text-muted"
                tabIndex={-1}
              >
                Quit
              </button>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 flex items-baseline gap-2 font-mono text-[11px] leading-relaxed text-muted">
        <span className="text-accent" aria-hidden="true">
          ⬒
        </span>
        Replica of the menu-bar popover, reproducing the live UI - tones, progress bars, freshness, and the per-provider tabs.
      </figcaption>
    </figure>
  )
}