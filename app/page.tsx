import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import {
  HERO,
  SELECTED_WORK,
  COMPANY_PROJECTS,
  WORK_EXPERIENCE,
  ABOUT,
  CONNECT_LINKS,
} from './data'
import { EMAIL } from '@/lib/constants'
import { FEATURED_POSTS } from './writing/posts'
import { Reveal } from '@/components/site/reveal'
import { Section } from '@/components/site/section'
import { ProjectRow } from '@/components/site/project-row'

function Hero() {
  return (
    <section className="pb-16 pt-12 sm:pb-24 sm:pt-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {HERO.kicker}
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {HERO.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          {HERO.tagline}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {HERO.sub}
        </p>
      </Reveal>
    </section>
  )
}

function About() {
  return (
    <Section id="about" number="01" label="About">
      <p className="max-w-2xl text-lg leading-relaxed text-foreground">{ABOUT}</p>
    </Section>
  )
}

function SelectedWork() {
  return (
    <Section id="work" number="02" label="Selected work" title="Open source, out in the open">
      <div className="space-y-2">
        {SELECTED_WORK.map((project) => (
          <Reveal key={project.repo} delay={80}>
            <ProjectRow project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function WritingPreview() {
  return (
    <Section number="03" label="Writing">
      <div className="flex flex-col">
        {FEATURED_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group -mx-3 flex items-baseline justify-between gap-4 rounded-xl px-3 py-4 transition-colors duration-200 hover:bg-sheet"
          >
            <div>
              <h3 className="font-medium tracking-tight">{post.title}</h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
                {post.description}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-colors duration-200 group-hover:text-accent" />
          </Link>
        ))}
      </div>
      <Link
        href="/writing"
        className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
      >
        All writing
        <span aria-hidden="true">→</span>
      </Link>
    </Section>
  )
}

function Experience() {
  return (
    <Section number="04" label="Experience">
      <ol className="flex flex-col gap-px overflow-hidden rounded-xl border border-line bg-line">
        {WORK_EXPERIENCE.map((job) => (
          <li key={job.id} className="bg-paper p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium tracking-tight">{job.role}</h3>
              <span className="font-mono text-xs text-faint">{job.period}</span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {job.company}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {job.scope}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Also shipped at Suki
        </p>
        <div className="mt-3 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {COMPANY_PROJECTS.map((item) => (
            <div key={item.title} className="bg-paper p-5">
              <h3 className="font-medium tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.summary}
              </p>
              <p className="mt-3 font-mono text-[11px] text-faint">{item.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Connect() {
  return (
    <Section number="05" label="Connect">
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        I&rsquo;m always happy to talk architecture, browser platforms, and
        developer tools -{' '}
        <a
          href={`mailto:${EMAIL}`}
          className="text-foreground underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          email me
        </a>
        , or find me here:
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {CONNECT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/40 hover:text-foreground"
          >
            <link.icon className="h-3.5 w-3.5" />
            {link.label}
            <span className="text-faint transition-colors group-hover:text-accent" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <div className="pb-16">
      <Hero />
      <About />
      <SelectedWork />
      <WritingPreview />
      <Experience />
      <Connect />
    </div>
  )
}