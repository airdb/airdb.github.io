import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/': [
    {
      text: 'Guide',
      children: [
        '/README.md',
        '/intro.md',
        '/donate.md',
      ],
    },
  ],
}
