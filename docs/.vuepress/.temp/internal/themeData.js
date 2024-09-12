export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首頁\",\"link\":\"/\"},{\"text\":\"文章\",\"children\":[{\"text\":\"電影\",\"link\":\"/articles/movies/\"},{\"text\":\"動畫\",\"link\":\"/articles/animes/\"},{\"text\":\"桌遊\",\"link\":\"/articles/boardgames/\"},{\"text\":\"實境遊戲\",\"link\":\"/articles/escapegames/\"}]}],\"sidebar\":{\"/articles/movies/\":[{\"text\":\"電影文章\",\"children\":[]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
