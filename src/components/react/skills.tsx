// src/components/Skills.tsx
import { useEffect } from 'react'
import { technologies, type Technologies, type Category } from '@/consts'
import { InfiniteScroll } from '../ui/infinite-scroll'
import { type IconType } from 'react-icons'
import { FaQuestionCircle } from 'react-icons/fa'
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPhp,
  SiAstro,
  SiTailwindcss,
  SiSass,
  SiWordpress,
  SiTypescript,
  SiGit,
  SiSupabase,
  SiNetlify,
  SiFigma,
  SiNodedotjs,
  SiLua,
  SiExpress,
  SiApache,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si'
import { Code } from 'lucide-react'

const iconMap: { [logo: string]: IconType } = {
  'mdi:language-html5':      SiHtml5,
  'mdi:language-javascript': SiJavascript,
  'mdi:language-css3':       SiCss3,
  'mdi:language-php':        SiPhp,
  'simple-icons:astro':      SiAstro,
  'mdi:tailwind':            SiTailwindcss,
  'mdi:sass':                SiSass,
  'mdi:typescript':          SiTypescript,
  'mdi:wordpress':           SiWordpress,
  'mdi:visual-studio-code':  Code,
  'mdi:git':                 SiGit,
  'mdi:figma':               SiFigma,
  'cib:netlify':             SiNetlify,
  'mdi:language-lua':        SiLua,
  'mdi:expressjs':           SiExpress,
  'cib:apache':              SiApache,
  'cib:mysql':               SiMysql,
  'mdi:nodejs':              SiNodedotjs,
  'cib:supabase':            SiSupabase,
  'cib:postgresql':          SiPostgresql,
}

const categories = Object.keys(technologies) as (keyof Technologies)[]
const groupSize = Math.ceil(categories.length / 3)
const categoryGroups = [
  categories.slice(0, groupSize),
  categories.slice(groupSize, groupSize * 2),
  categories.slice(groupSize * 2),
]

const Skills: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('.tech-badge').forEach(badge => {
      badge.classList.add('tech-badge-visible')
    })
  }, [])

  return (
    <div className="z-30 mt-12 flex w-full flex-col max-w-[calc(100vw-5rem)] mx-auto lg:max-w-full">
      <div className="space-y-2">
        {categoryGroups.map((group, gi) => (
          <InfiniteScroll
            key={gi}
            duration={50000}
            direction={gi % 2 === 0 ? 'normal' : 'reverse'}
            showFade
            className="flex flex-row justify-center"
          >
            {group.flatMap(category =>
              technologies[category].map((tech, ti) => {
                const Icon = iconMap[tech.logo] || FaQuestionCircle
                return (
                  <div
                    key={`${category}-${ti}`}
                    className="tech-badge repo-card border-border bg-card text-muted-foreground mr-5 flex items-center gap-3 rounded-full border p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                    data-tech-name={`${category}-${ti}`}
                  >
                    <span className="bg-muted flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg shadow-inner">
                      <Icon className="tech-icon text-primary" />
                    </span>
                    <span className="text-foreground font-medium">
                      {tech.text}
                    </span>
                  </div>
                )
              })
            )}
          </InfiniteScroll>
        ))}
      </div>
    </div>
  )
}

export default Skills
