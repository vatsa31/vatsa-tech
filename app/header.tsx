'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

const SUKI_URL = 'https://www.suki.ai'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Shrivatsa Kashyap
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 underline underline-offset-2 dark:text-zinc-500"
          delay={0.2}
        >
          Software Engineer - II
        </TextEffect>
        <Link href={SUKI_URL} className="w-fit">
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="w-fit text-zinc-600 dark:text-zinc-500"
            delay={0.2}
          >
            Suki
          </TextEffect>
        </Link>
      </div>
    </header>
  )
}
