'use client'

import Link from 'next/link'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-8 w-8" aria-hidden="true" />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-sheet hover:text-foreground"
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  )
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground transition-colors hover:text-muted"
        >
          Shrivatsa Kashyap
        </Link>
        <nav className="flex items-center gap-5">
          <Link
            href="/writing"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Writing
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}