import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { setupAlertBoxes } from './extend-md/markdown-extensions' // 导入自定义的警告框处理函数


// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/blog/",
  vite: {
    plugins: [MarkdownPreview()],
  },
  markdown: {
    image: {
      lazyLoading: true
    },
    config: (md) => {
      // 添加自定义的警告框支持
      setupAlertBoxes(md);
    },
  },
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "logo3.png" }],
  ],
  title: "鱼梦江湖",
  description: "知识文档",
  themeConfig: {
    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // },
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到暗色主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '顶部',
    externalLinkIcon:true, // 外部链接旁显示外部链接图标
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    logo: '/logo3.png',
    sidebar: false, // 关闭侧边栏
    aside: 'left', // 设置右侧侧边栏在左侧显示
    outlineTitle: '目录',
    outline: 'deep',  // 根据h1 - h2 自动排版

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          },
        },
      },
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '工具导航', link: '/index/resources' },
      {
        text: 'Web', items: [
          {
            text: '',
            items: [
              { text: 'HTML 理论知识', link: '/pages/HTML5/note' },
              { text: 'CSS 理论知识', link: '/pages/CSS/note' },
              { text: 'JavaScript 基础知识', link: '/pages/JavaScript/note' },
              { text: 'TypeScript 快速入门', link: '/pages/TypeScript/note' },
              { text: 'Vue3 快速入门', link: '/pages/Vue3/note' },
              { text: 'Uniapp 快速入门', link: '/pages/uniapp/note' },
            ],

          },
          {
            text: '',
            items: [
              { text: 'Node.js 入门', link: '/pages/Node/note' },
              { text: 'SQL Server', link: '/pages/SQL-Server/note' },
            ],
          },
          {
            text: '',
            items: [
              { text: 'Github 快速入门', link: '/pages/Github+Git/note' },
              { text: 'Git 快速入门', link: '/pages/Git/note' },
              { text: 'Vite 理论知识', link: '/pages/Vite/note' },
              { text: 'Cursor 基础使用', link: '/pages/Cursor基础使用/note'},
            ],
          },
        ]
      },
      {
        text: '随记',
        items: [
          { text: '图床测试', link: '/other/imgbed/note' },
          { text: '前端杂谈', link: '/pages/前端杂谈/note' },
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yumengjianghu' },

    ],
    footer: {
      copyright: 'Vitepress',
      message: 'Copyright © 鱼梦江湖 2025 MIT',
    }
  }

})
