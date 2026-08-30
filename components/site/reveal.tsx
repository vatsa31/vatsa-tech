'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  id?: string
}

export function Reveal({ children, delay = 0, className, id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'reveal transition-[opacity,transform] duration-500 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}