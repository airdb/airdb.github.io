import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarZh: NavbarConfig = [
  {
    text: '概览',
    children: [
          { text: 'Intro', link: '/zh/intro.md', },
    ],
  },
  {
    text: '机器人',
    children: [
          { text: 'Intro', link: '/zh/robot.md', },
    ],
  },
  {
    text: '定价',
    children: [
          { text: 'Intro', link: '/zh/pricing.md', },
    ],
  },
  {
    text: 'AI 探索之旅',
    children: [
          { text: 'Intro', link: '/zh/eplore.md', },
    ],
  },
]
