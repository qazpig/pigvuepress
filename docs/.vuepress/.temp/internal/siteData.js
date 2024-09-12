export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-TW\",\"title\":\"我的博客\",\"description\":\"電影、動畫、桌遊和實境遊戲的評論\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
