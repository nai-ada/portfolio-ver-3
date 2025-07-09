// src/consts.ts
import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Nadia Vespalec',
  description:
    "I'm a Full Stack Developer with a passion for creating clean and functional websites that operate on dependable code and sleek user interfaces. With a strong background in Front End Development, I'm always eager to learn new technologies and frameworks to create optimized websites with beautiful user interfaces. I enjoy collaborating with teams and contributing to ground-breaking projects.",
  href: 'https://nadiavespalec.com',
  author: 'Nadia Vespalec',
  locale: 'en-US',
  location: 'Vancouver',
}

export const NAV_LINKS: SocialLink[] = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/nai-ada', label: 'GitHub' },
  { href: 'mailto:nadiavespalec00@gmail.com', label: 'Email' },
]

export const ICON_MAP: IconMap = {
  GitHub: 'lucide:github',
  Email: 'lucide:mail',
  LinkedIn: '',
  Resume: '',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Web Development': Category[]
  'Development Tools': Category[]
  'Hosting and Cloud Services': Category[]
  'Other Programming Languages and Technologies': Category[]
  'Web Servers': Category[]
  Databases: Category[]
  'Design Tools': Category[]
}

export const technologies: Technologies = {
  'Web Development': [
    { text: 'HTML', logo: 'mdi:language-html5' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
    { text: 'CSS', logo: 'mdi:language-css3' },
    { text: 'PHP', logo: 'mdi:language-php' },
    { text: 'Astro', logo: 'simple-icons:astro' },
    { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
    { text: 'Typescript', logo: 'mdi:typescript' },
    { text: 'SASS', logo: 'mdi:sass' },
    { text: 'WordPress', logo: 'mdi:wordpress' },
  ],
  'Development Tools': [
    { text: 'Visual Studio Code', logo: 'mdi:visual-studio-code' },
    { text: 'Git', logo: 'mdi:git' },
  ],
  'Design Tools': [
    { text: 'Figma', logo: 'mdi:figma' },
  ],
  'Hosting and Cloud Services': [
    { text: 'Netlify', logo: 'cib:netlify' },
  ],
  'Other Programming Languages and Technologies': [
    { text: 'Lua', logo: 'mdi:language-lua' },
    { text: 'Node.js', logo: 'mdi:nodejs' },
    { text: 'Express.js', logo: 'mdi:expressjs' },
  ],
  'Web Servers': [
    { text: 'Apache', logo: 'cib:apache' },
  ],
  Databases: [
    { text: 'MySQL', logo: 'cib:mysql' },
    { text: 'Supabase', logo: 'cib:supabase' },
    { text: 'PostgreSQL', logo: 'cib:postgresql' },
  ],
}
