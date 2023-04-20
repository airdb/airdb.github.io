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
          { text: 'Intro', link: '/en/pricing.md', },
    ],
  },
  {
    text: 'AI Explore',
    children: [
          { text: 'Intro', link: '/en/eplore.md', },
    ],
  },
]
