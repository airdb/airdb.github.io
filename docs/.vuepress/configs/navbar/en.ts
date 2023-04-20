import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Overview',
    children: [
          { text: 'Intro', link: '/en/intro.md', },
    ],
  },
  {
    text: 'Robots',
    children: [
          { text: 'Intro', link: '/en/robot.md', },
    ],
  },
  {
    text: 'Pricing',
    children: [
      { text: 'pricing', link: '/en/pricing.md', },
      { text: 'StatusPage', link: 'https://airdb.statuspage.io/', },
    ],
  },
  {
    text: 'AI Explore',
    children: [
          { text: 'Intro', link: '/en/eplore.md', },
    ],
  },
]
