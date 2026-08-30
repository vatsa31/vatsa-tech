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
    month: 'short',
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
          Writing about the systems I build
        </h1>
      </div>

      <div className="flex flex-col">
        {published.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group -mx-3 block rounded-xl px-3 py-4 transition-colors duration-200 hover:bg-sheet sm:px-4"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium text-foreground">
                {post.title}
              </h2>
              {post.date ? (
                <span className="shrink-0 font-mono text-xs text-faint">
                  {formatDate(post.date)}
                </span>
              ) : null}
            </div>
            <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted">
              {post.description}
            </p>
          </Link>
        ))}
      </div>

      {drafts.length > 0 ? (
        <div className="mt-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            In progress
          </p>
          <div className="flex flex-col">
            {drafts.map((post) => (
              <div
                key={post.slug}
                className="-mx-3 block rounded-xl px-3 py-3 sm:px-4"
                aria-disabled="true"
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="font-normal text-muted">{post.title}</h3>
                  <span className="font-mono text-[11px] text-faint">
                    drafting
                  </span>
                </div>
                <p className="mt-1 max-w-lg text-sm text-faint">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}