import { useId, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

function ArrowMarker({
  id,
  accent,
}: {
  id: string
  accent?: boolean
}) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="5.5"
        markerHeight="5.5"
        orient="auto-start-reverse"
      >
        <path
          d="M0 0L10 5L0 10z"
          className={accent ? 'fill-accent' : 'fill-foreground opacity-40'}
        />
      </marker>
    </defs>
  )
}

type DiagramProps = {
  viewBox?: string
  label: string
  caption?: string
  children: ReactNode
  className?: string
}

export function Diagram({
  viewBox = '0 0 720 400',
  label,
  caption,
  children,
  className,
}: DiagramProps) {
  return (
    <figure className={cn('my-10', className)}>
      <div className="dot-grid relative overflow-hidden rounded-xl border border-line">
        <svg
          viewBox={viewBox}
          role="img"
          aria-label={label}
          className="block h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {children}
        </svg>
      </div>
      {caption ? (
        <figcaption className="mt-3 flex items-baseline gap-2 font-mono text-[11px] leading-relaxed text-muted">
          <span className="text-accent" aria-hidden="true">
            ⬒
          </span>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

type DNodeProps = {
  x: number
  y: number
  w?: number
  h?: number
  label: string
  sub?: string
  accent?: boolean
  faint?: boolean
  className?: string
}

function CenterText({
  x,
  y,
  w,
  h,
  label,
  sub,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
}) {
  const lines = label.split('\n')
  const cx = x + w / 2
  const lineHeight = 13
  const fontSize = 11
  const baseline = sub ? y + h / 2 - 6 : y + h / 2

  return (
    <>
      {lines.map((line, i) => {
        const center = baseline + (i - (lines.length - 1) / 2) * lineHeight
        return (
          <text
            key={i}
            x={cx}
            y={center}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            letterSpacing="0.03em"
            className="fill-foreground"
          >
            {line}
          </text>
        )
      })}
      {sub ? (
        <text
          x={cx}
          y={y + h - 8}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={8.5}
          letterSpacing="0.02em"
          className="fill-muted"
        >
          {sub}
        </text>
      ) : null}
    </>
  )
}

export function DNode({
  x,
  y,
  w = 150,
  h = 46,
  label,
  sub,
  accent,
  faint,
  className,
}: DNodeProps) {
  return (
    <g className={cn('font-mono', className)}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        className={
          accent
            ? 'fill-paper stroke-accent'
            : faint
              ? 'fill-paper stroke-line'
              : 'fill-sheet stroke-line-strong'
        }
        strokeWidth={accent ? 1.4 : 1}
      />
      {accent ? (
        <rect x={x} y={y + h / 2 - 9} width={2.5} height={18} rx={1.25} className="fill-accent" />
      ) : null}
      <CenterText x={x + (accent ? 2 : 0)} y={y} w={w - (accent ? 4 : 0)} h={h} label={label} sub={sub} />
    </g>
  )
}

type DEdgeProps = {
  d: string
  dashed?: boolean
  flow?: boolean
  arrow?: boolean
  accent?: boolean
  label?: string
  labelX?: number
  labelY?: number
  labelAnchor?: 'start' | 'middle' | 'end'
  className?: string
}

export function DEdge({
  d,
  dashed,
  flow,
  arrow = true,
  accent,
  label,
  labelX,
  labelY,
  labelAnchor = 'start',
  className,
}: DEdgeProps) {
  const id = useId()
  const needsAccent = accent ?? flow
  const markerId = arrow ? `${id}-${needsAccent ? 'accent' : 'arrow'}` : undefined

  return (
    <g className={cn('font-mono', className)}>
      {arrow ? <ArrowMarker id={markerId!} accent={needsAccent} /> : null}
      <path
        d={d}
        fill="none"
        strokeWidth={dashed ? 1 : 1.2}
        markerEnd={markerId ? `url(#${markerId})` : undefined}
        className={cn(
          flow && 'flow-line stroke-accent',
          !flow && dashed && 'stroke-line-strong',
          !flow && !dashed && 'stroke-muted opacity-60',
          accent && 'stroke-accent',
        )}
      />
      {label ? (
        <text
          x={labelX}
          y={labelY}
          textAnchor={labelAnchor}
          fontSize={9}
          letterSpacing="0.02em"
          className="fill-muted"
        >
          {label}
        </text>
      ) : null}
    </g>
  )
}

type DLabelProps = {
  x: number
  y: number
  children: ReactNode
  accent?: boolean
  anchor?: 'start' | 'middle' | 'end'
  className?: string
}

export function DLabel({
  x,
  y,
  children,
  accent,
  anchor = 'start',
  className,
}: DLabelProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={9.5}
      letterSpacing="0.05em"
      className={cn(
        'font-mono',
        accent ? 'fill-accent' : 'fill-muted',
        className,
      )}
    >
      {children}
    </text>
  )
}

type DBoxProps = {
  x: number
  y: number
  w: number
  h: number
  label?: string
  labelX?: number
  labelY?: number
  dashed?: boolean
  children?: ReactNode
}

export function DBox({ x, y, w, h, label, labelX, labelY, dashed, children }: DBoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        className="fill-sheet/50 stroke-line-strong"
        strokeWidth={dashed ? 1 : 1}
        strokeDasharray={dashed ? '5 5' : undefined}
      />
      {label ? (
        <text
          x={labelX ?? x + 10}
          y={labelY ?? y + 20}
          fontSize={9.5}
          letterSpacing="0.12em"
          className="fill-muted font-mono uppercase"
        >
          {label}
        </text>
      ) : null}
      {children}
    </g>
  )
}

export function DPulse({ x, y, r = 3 }: { x: number; y: number; r?: number }) {
  return <circle cx={x} cy={y} r={r} className="fill-accent pulse-dot" />
}