const path = require('path')

module.exports = {
  clientRootMixin: path.resolve(__dirname, 'mixin.js'),
  head: [
	['link', {rel: 'icon', href: `/favicon.ico`}]
  ],
  markdown: {
    externalLinkSymbol: false,
  },
  ga: 'UA-133539351-1',
  base : '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Airdb',
      description : 'Better Tech Better Life',
    },
    '/zh': {
      lang: 'zh-CN',
      title: 'Airdb',
      description : '科技让公益更加美好。',
    }
  },
  themeConfig : {
    /*
    repo: 'airdb/vuepress',
    editLinks: true,
    */
    docsDir: '.',
    locales: {
      '/': {
	    label: 'English',
        selectText: 'Languages',
        lastUpdated: 'LastUpdated',
        search: true,
        searchMaxSuggestions: 10,
        nav: require('../config/nav-en-US.js'),
        sidebar: {
            '/en/guide/': getSidebar_en_guide(),
            '/en/sre/entrytask/': getSidebar_en_entrytask("sre"),
            '/en/labs-college/courses/': getSidebar_en_courses("sre"),
        },
        sidebarDepth : 2
      },
      '/zh': {
        label: '简体中文',
        selectText: '选择语言',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新',
        nav: require('../config/nav-zh-CN.js'),
        sidebar: {
          '/zh/open/ai/': getAlgorithmSidebar(),
          '/zh/english/': getEnglishSidebar(),
          '/zh/go/': getGoSidebar()
        },
        sidebarDepth : 2
      }
    }
  }
}


function getAlgorithmSidebar() {
  return [
    {
      title: '算法',
      collapsable: true,
      children: [
        ''
      ]
    },
    {
      title: '基础算法',
      collapsable: true,
      children: [
        'sort'
      ]
    },
    {
      title: '机器学习相关',
      collapsable: true,
      children: [
        'thing'
      ]
    }
  ]
}

function getEnglishSidebar() {
  return [
    {
      title: 'Overview',
      collapsable: true,
      children: [
        ''
      ]
    },
    {
      title: 'Level 3',
      collapsable: true,
      children: [
        'level3/unit3/part1/life-and-conditions-2',
        'level3/unit3/part1/forms-of-life',
        'level3/unit3/part1/instruments',
        'level3/unit3/part1/dating-anniversary',
        'level3/unit3/part1/fine-dining',
        'level3/unit3/part2/QuickServe-1',
        'level3/unit3/part2/QuickServe-2',
        'level3/unit3/part2/Sciences',
        'level3/unit3/part2/Desk-Assembly',
        'level3/unit3/part2/Life-and-the-Universe',
        'level3/unit3/part3/Harry\'s-Business-Trip-1',
        'level3/unit3/part3/Harry\'s-Business-Trip-2'
      ]
    },
    {
      title: 'Daily Question',
      collapsable: true,
      children: [
        'daily-question/02/week07',
        'daily-question/02/week08',
        'daily-question/02/week09'
      ]
    }
  ]
}

function getGoSidebar() {
  return [
    {
      title: 'Golang 入门',
      collapsable: true,
      children: [
        ''
      ]
    },
    {
      title: 'Web 开发',
      collapsable: true,
      children: [
        'beego'
      ]
    }
  ]
}

function getSidebar_en_guide() {
  return [
    {
      title: 'Introduction',
      collapsable: true,
      children: [
        '',
        'organization',
        'culture'
      ]
    },
    {
      title: 'Products & Services',
      collapsable: true,
      children: [
        'products',
        'services',
      ]
    },
    {
      title: 'Career',
      collapsable: true,
      children: [
        'career'
      ]
    }
  ]
}

function getSidebar_en_entrytask() {
  return [
    {
      title: 'Overview',
      collapsable: true,
      children: [
        ''
      ]
    },
    {
      title: 'SRE',
      collapsable: true,
      children: [
        ''
      ]
    }
  ]
}

function getSidebar_en_courses() {
  return [
    {
      title: 'Overview',
      collapsable: true,
      children: [
        ''
      ]
    },
    {
      title: 'Stack Test',
      collapsable: true,
      children: [
        'st1001'
      ]
    },
    {
      title: 'Developer Tutorials',
      collapsable: true,
      children: [
        'dev1000',
        'dev1001',
        'lc1001',
        'lc1002'
      ]
    },
	{
      title: 'Sharing Record',
      collapsable: true,
      children: [
        'records'
      ]
    }
  ]
}
