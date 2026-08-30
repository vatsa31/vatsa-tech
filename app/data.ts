import type { LucideIcon } from 'lucide-react'
import { Github, Linkedin, Mail } from 'lucide-react'

export type Project = {
  repo: string
  title: string
  summary: string
  href: string
  github: string
  meta: string
  tags?: string[]
}

export const HERO = {
  kicker: 'Software Engineer II, Frontend - Suki',
  title: 'Shrivatsa Kashyap',
  tagline:
    'I build SDKs, real-time browser systems, and developer tools that have to keep working when the network doesn\u2019t.',
  sub: 'Most of my work lives at the boundary between web applications, browser and platform APIs, and native code: browser audio pipelines, WebSocket transports, offline stores, and state-machine orchestration. When I\u2019m not at work, I\u2019m shipping small open-source tools for developers.',
}

export const SELECTED_WORK: Project[] = [
  {
    repo: 'usagent',
    title: 'Usagent',
    summary:
      'A macOS menu-bar app that shows Codex and Cursor token usage behind one normalized provider interface. Credentials stay in Rust; only numbers reach the UI.',
    href: '/work/usagent',
    github: 'https://github.com/vatsa31/usagent',
    meta: 'Tauri · Rust · React',
  },
  {
    repo: 'turbo-vite-react',
    title: 'create-pn-react-express',
    summary:
      'An npm scaffold that sets up a Turborepo monorepo with Vite, React, and TypeScript - including a clean folder structure for apis, hooks, routes, and components.',
    href: '/work/turbo-vite-react',
    github: 'https://github.com/vatsa31/turbo-vite-react',
    meta: 'npm · Turborepo · Vite',
  },
  {
    repo: 'react-exp-workspace',
    title: 'create-nx-react-express-workspace',
    summary:
      'An npm scaffold for an Nx workspace that combines a Vite + React client with an Express server, both in TypeScript.',
    href: '/work/react-exp-workspace',
    github: 'https://github.com/vatsa31/react-exp-workspace',
    meta: 'npm · Nx · Express',
  },
  {
    repo: 'over-shadower',
    title: 'over-shadower',
    summary:
      'A box-shadow generator, neomorphism-style. Adjust size, radius, offsets, color, and blur live - and copy the value out.',
    href: '/work/over-shadower',
    github: 'https://github.com/vatsa31/over-shadower',
    meta: 'React · TypeScript · Turborepo',
  },
]

export const COMPANY_PROJECTS = [
  {
    title: 'Ambient audio SDK',
    summary:
      'Browser audio capture, real-time streaming, and offline recovery - embedded by 10+ organizations, ~1,500 daily users.',
    meta: 'Suki · production',
  },
  {
    title: 'Support platform',
    summary:
      'An internal CRM used by ~300 employees, migrated from a legacy frontend onto typed React with shared packages.',
    meta: 'Suki · production',
  },
]

export const WORK_EXPERIENCE = [
  {
    id: 'se2',
    role: 'Software Engineer II, Frontend',
    company: 'Suki',
    period: '2025 - Present',
    scope:
      'SDK architecture and reliability: ambient-audio infrastructure, session orchestration, and offline-first recovery.',
  },
  {
    id: 'se1',
    role: 'Software Engineer I, Frontend',
    company: 'Suki',
    period: '2023 - 2025',
    scope:
      'Frontend systems across clinical products - transport, offline workflows, and internal platform modernization.',
  },
  {
    id: 'intern',
    role: 'Engineering Intern',
    company: 'Suki',
    period: '2023',
    scope:
      'Joined as an intern; shipped frontend work before converting full-time.',
  },
]

export const ABOUT =
  'I\u2019m a frontend engineer, currently at Suki. I work in TypeScript and React on systems that sit between web applications, browser and platform APIs, native code, and backend infrastructure - and I care about architecture decisions, failure modes, and shipping software that stays reliable under real production conditions.'

export type ConnectLink = {
  label: string
  href: string
  icon: LucideIcon
}

export const CONNECT_LINKS: ConnectLink[] = [
  {
    label: 'Email',
    href: 'mailto:shrivatsakulkarni31@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vatsa31',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shrivatsa-kulkarni-65967a1b8/',
    icon: Linkedin,
  },
]