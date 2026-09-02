import Link from 'next/link'
import { Globe, Github } from 'lucide-react'
import type { Project } from '@/app/data'
import { cn } from '@/lib/utils'

export function ProjectRow({ project, className }: { project: Project; className?: string }) {
  return (
    <div
      className={cn(
        'group relative block rounded-xl border border-transparent p-4 transition-colors duration-200 hover:border-line hover:bg-sheet sm:p-6',
        className,
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
        <span className="font-mono text-sm text-accent">{project.meta}</span>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <Link href={project.href} className="group/title">
              <h3 className="text-lg font-medium leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover/title:text-accent sm:text-xl">
                {project.title}
              </h3>
            </Link>
            {project.site ? (
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site`}
                title={`${project.title} live site`}
                className="shrink-0 text-muted transition-colors duration-200 hover:text-accent"
              >
                <Globe className="h-4 w-4" />
              </a>
            ) : null}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              title={`${project.title} on GitHub`}
              className="shrink-0 text-muted transition-colors duration-200 hover:text-accent"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          {project.tags && project.tags.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  )
}