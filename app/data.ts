type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

// export const PROJECTS: Project[] = [
//   {
//     name: 'Motion Primitives Pro',
//     description:
//       'Advanced components and templates to craft beautiful websites.',
//     link: 'https://pro.motion-primitives.com/',
//     video:
//       'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
//     id: 'project1',
//   },
//   {
//     name: 'Motion Primitives',
//     description: 'UI kit to make beautiful, animated interfaces.',
//     link: 'https://motion-primitives.com/',
//     video:
//       'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
//     id: 'project2',
//   },
// ]
//

export const PROJECTS: Project[] = []

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Suki',
    title: 'Software Engineer - II',
    start: '2024',
    end: 'Present',
    id: 'work3',
  },
  {
    company: 'Suki',
    title: 'Software Engineer - I',
    start: '2023',
    end: '2024',
    id: 'work2',
  },
  {
    company: 'Suki',
    title: 'Engineering Intern',
    start: '2023',
    end: '2023',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Finite State Machine design pattern',
    description:
      'How FSM architecture can be used to handle Offline Audio Upload',
    link: '/blog/fsm-design-pattern',
    uid: 'blog-1',
  },
  {
    title: 'My take on the current job market',
    description:
      'A deep dive into my thoughts on where frontend development is headed',
    link: '/blog/take-on-current-job-market',
    uid: 'blog-2',
  },
  {
    title: 'How AI impacts the state of frontend development',
    description: 'My take on the impact of AI on frontend development',
    link: '/blog/ai-impacts-fe-development',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/vatsa31',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/thisisvatsaa',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/shrivatsa-kulkarni-65967a1b8/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/thisisvatsaa',
  },
]

export const EMAIL = 'shrivatsakulkarni31@gmail.com'
