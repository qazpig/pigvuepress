export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/articles/animes/underpen1.html", { loader: () => import(/* webpackChunkName: "articles_animes_underpen1.html" */"C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/articles/animes/underpen1.html.js"), meta: {"title":"『伏筆』是我繼續的動力(一)－重啟咲良田的麥高芬"} }],
  ["/articles/boardgames/boardtesting.html", { loader: () => import(/* webpackChunkName: "articles_boardgames_boardtesting.html" */"C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/articles/boardgames/boardtesting.html.js"), meta: {"title":"測試桌遊標題噗噗"} }],
  ["/articles/boardgames/catan.html", { loader: () => import(/* webpackChunkName: "articles_boardgames_catan.html" */"C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/articles/boardgames/catan.html.js"), meta: {"title":"卡坦島：策略與運氣的完美平衡"} }],
  ["/articles/boardgames/dawft.html", { loader: () => import(/* webpackChunkName: "articles_boardgames_dawft.html" */"C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/articles/boardgames/dawft.html.js"), meta: {"title":"矮人礦坑：緊張刺激的寶石爭奪戰"} }],
  ["/articles/movies/conan_millian.html", { loader: () => import(/* webpackChunkName: "articles_movies_conan_millian.html" */"C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/articles/movies/conan_millian.html.js"), meta: {"title":"100萬美元的五稜星－這就是商業動畫電影的頂標嗎？現在的柯南超級有趣"} }],
  ["/articles/movies/inception.html", { loader: () => import(/* webpackChunkName: "articles_movies_inception.html" */"C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/articles/movies/inception.html.js"), meta: {"title":"Inception: A Mind-Bending Experience"} }],
  ["/articles/movies/testing.html", { loader: () => import(/* webpackChunkName: "articles_movies_testing.html" */"C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/articles/movies/testing.html.js"), meta: {"title":"測試標題噗噗"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/My/Desktop/programming practice/pigvuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
