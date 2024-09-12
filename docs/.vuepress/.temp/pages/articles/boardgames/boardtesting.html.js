import comp from "C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/articles/boardgames/boardtesting.html.vue"
const data = JSON.parse("{\"path\":\"/articles/boardgames/boardtesting.html\",\"title\":\"測試桌遊標題噗噗\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"測試桌遊標題噗噗\",\"rating\":5,\"date\":\"2023-05-15\",\"category\":\"boardgame\"},\"headers\":[{\"level\":2,\"title\":\"文章測試\",\"slug\":\"文章測試\",\"link\":\"#文章測試\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"articles/boardgames/boardtesting.md\"}")
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
