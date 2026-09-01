import type { Metadata } from 'next'
import Link from 'next/link'
import { WRITING_POSTS } from './posts'
import { SectionNumber } from '@/components/site/section'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Writing by Shrivatsa Kashyap on frontend systems, browser internals, and engineering.',
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export default function WritingPage() {
  const published = WRITING_POSTS.filter((p) => p.status === 'published')
  const drafts = WRITING_POSTS.filter((p) => p.status === 'draft')

  return (
    <div className="pb-24">
      <div className="mb-12">
        <SectionNumber number="W" label="Writing" />
        <h1 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
          Notes on the systems I build
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          Long-form writing about React, browser internals, and the engineering
          decisions behind real products.
        </p>
      </div>

      <div className="flow-root">
        <ul className="divide-y divide-line">
          {published.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="group flex items-baseline justify-between gap-6 py-6"
              >
                <div>
                  <h2 className="text-lg font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-muted">
                    {post.description}
                  </p>
                </div>
                {post.date ? (
                  <span className="shrink-0 font-mono text-xs text-faint">
                    {formatDate(post.date)}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {drafts.length > 0 ? (
        <div className="mt-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            In progress
          </p>
          <ul className="divide-y divide-line">
            {drafts.map((post) => (
              <li key={post.slug} className="flex items-baseline justify-between gap-6 py-4">
                <div>
                  <span className="text-[15px] text-muted">{post.title}</span>
                  <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-faint">
                    drafting
                  </span>
                </div>
                <p className="max-w-md text-sm text-faint">{post.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}