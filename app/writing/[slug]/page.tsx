import { notFound } from 'next/navigation'
import fs from 'node:fs/promises'
import path from 'node:path'
import type { Metadata } from 'next'
import { ArticleHeader } from '@/components/site/article-header'
import { WRITING_POSTS } from '../posts'

const READING_WPM = 220

function readingMinutes(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`\[\]\(\)!-]/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const words = text.split(' ').filter(Boolean).length
  return Math.max(1, Math.round(words / READING_WPM))
}

const CONTENT_DIR = path.join(process.cwd(), 'app/writing/_content')

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = WRITING_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params
  const post = WRITING_POSTS.find((p) => p.slug === slug)

  if (!post || post.status !== 'published') notFound()

  let Content: React.ComponentType
  try {
    Content = (await import(`../_content/${slug}.mdx`)).default
  } catch {
    notFound()
  }

  let raw = ''
  try {
    raw = await fs.readFile(path.join(CONTENT_DIR, `${slug}.mdx`), 'utf8')
  } catch {
    raw = ''
  }
  const minutes = readingMinutes(raw)

  return (
    <ArticleHeader title={post.title} date={formatDate(post.date)} minutes={minutes}>
      <Content />
    </ArticleHeader>
  )
}

function formatDate(date?: string) {
  if (!date) return undefined
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}