export type WritingPost = {
  slug: string
  title: string
  description: string
  date?: string
  status: 'published' | 'draft'
}

export const WRITING_POSTS: WritingPost[] = [
  {
    slug: 'react-the-journey',
    title: 'From React Code to Browser: The Journey Simplified',
    description:
      'What actually happens between writing a .tsx file and shipping a minified bundle - a walk through the modern React build pipeline.',
    date: '2025-10-20',
    status: 'published',
  },
  {
    slug: 'fsm-design-pattern',
    title: 'Exploring the Finite State Machine design pattern',
    description:
      'How FSM architecture can be used to handle offline audio upload.',
    status: 'draft',
  },
  {
    slug: 'hmr-one-click-update',
    title: 'Hot Module Replacement (HMR): One Click Update',
    description: 'How HMR powers faster development.',
    status: 'draft',
  },
  {
    slug: 'take-on-current-job-market',
    title: 'My take on the current job market',
    description:
      'A deep dive into my thoughts on where frontend development is headed.',
    status: 'draft',
  },
  {
    slug: 'ai-impacts-fe-development',
    title: 'How AI impacts the state of frontend development',
    description: 'My take on the impact of AI on frontend development.',
    status: 'draft',
  },
]

export const FEATURED_POSTS = WRITING_POSTS.filter(
  (post) => post.status === 'published',
).slice(0, 2)