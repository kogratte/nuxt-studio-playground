// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/hints",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/ui",
    "nuxt-studio",
    "@nuxtjs/i18n",
  ],
  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ["/"],
      // Then crawl all the links on the page
      crawlLinks: true,
    },
  },
  studio: {
    repository: {
      provider: "github", // 'github' or 'gitlab'
      owner: "kogratte", // your GitHub/GitLab username or organization
      repo: "nuxt-studio-playground", // your repository name
      branch: "main", // the branch to commit to (default: 'main')
      private: false,
    },
  },
  css: ["~/assets/css/main.css"],
  i18n: {
    locales: [
      { code: "en", name: "English", language: "en-US" },
      { code: "fr", name: "French", language: "fr-FR" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    strategy: "prefix",
    defaultLocale: "en",
  },
  content: {
    preview: {
      // force module initialization on dev env
      api: "https://api.nuxt.studio",
    },
  },
});
