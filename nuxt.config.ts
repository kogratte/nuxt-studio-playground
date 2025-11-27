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
    auth: {
      github: {
        clientId: "",
        clientSecret: "",
      },
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
      dev: true,
    },
  },
});
