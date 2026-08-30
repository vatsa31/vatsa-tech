import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import { MetricBand } from '@/components/site/metric'
import {
  CaseHeader,
  CaseSection,
  CaseGrid,
  CaseList,
  CasePull,
  CaseRelated,
  ExternalLink,
} from '@/components/case'
import { AmbientSystemDiagram } from '@/components/diagram/figures/ambient-system'
import { AmbientRecoveryDiagram } from '@/components/diagram/figures/ambient-recovery'
import { SupportPlatformDiagram } from '@/components/diagram/figures/support-platform'
import { UsagentArchitectureDiagram } from '@/components/diagram/figures/usagent-architecture'
import { UsagentMock } from '@/components/site/usagent-mock'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="mt-2 text-center font-mono text-xs text-muted">
            {caption}
          </figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
    h1: (props) => <h1 {...props} />,
    MetricBand,
    CaseHeader,
    CaseSection,
    CaseGrid,
    CaseList,
    CasePull,
    CaseRelated,
    ExternalLink,
    AmbientSystemDiagram,
    AmbientRecoveryDiagram,
    SupportPlatformDiagram,
    UsagentArchitectureDiagram,
    UsagentMock,
  }
}