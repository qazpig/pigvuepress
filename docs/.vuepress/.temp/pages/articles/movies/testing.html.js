import comp from "C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/articles/movies/testing.html.vue"
const data = JSON.parse("{\"path\":\"/articles/movies/testing.html\",\"title\":\"測試標題噗噗\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"測試標題噗噗\",\"date\":\"2023-05-15\",\"category\":\"movie\",\"rating\":5},\"headers\":[{\"level\":2,\"title\":\"文章測試\",\"slug\":\"文章測試\",\"link\":\"#文章測試\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"articles/movies/testing.md\"}")
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
