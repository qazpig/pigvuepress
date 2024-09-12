import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-TW',
  title: '我的博客',
  description: '電影、動畫、桌遊和實境遊戲的評論',
  // 明確指定使用 Vite 打包器
  bundler: viteBundler(),
  
  theme: defaultTheme({
    navbar: [
      { text: '首頁', link: '/' },
      {
        text: '文章',
        children: [
          { text: '電影', link: '/articles/movies/' },
          { text: '動畫', link: '/articles/animes/' },
          { text: '桌遊', link: '/articles/boardgames/' },
          { text: '實境遊戲', link: '/articles/escapegames/' },
        ]
      },
    ],
    sidebar: {
      '/articles/movies/': [
        {
          text: '電影文章',
          children: [
            // 將會自動生成
          ],
        },
      ],
      // 為其他類別添加類似的配置
    }
  }),
})