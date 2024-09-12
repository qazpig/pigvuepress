import comp from "C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-TW\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.png\",\"heroText\":\"我的博客\",\"tagline\":\"電影、動畫、桌遊和實境遊戲的評論\",\"features\":[{\"title\":\"電影\",\"details\":\"最新電影評論和分析\"},{\"title\":\"動畫\",\"details\":\"精彩動畫作品介紹\"},{\"title\":\"桌遊\",\"details\":\"有趣的桌遊體驗分享\"},{\"title\":\"實境遊戲\",\"details\":\"刺激的實境遊戲探索\"}],\"footer\":\"Copyright © 2023 My Blog\"},\"headers\":[{\"level\":2,\"title\":\"最新文章\",\"slug\":\"最新文章\",\"link\":\"#最新文章\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
