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
          { text: '价格', link: '/zh/pricing.md', },
          { text: '服务状态', link: 'https://airdb.statuspage.io/', },
    ],
  },
  {
    text: 'AI 探索之旅',
    children: [
          { text: 'Intro', link: '/zh/eplore.md', },
    ],
  },
]
