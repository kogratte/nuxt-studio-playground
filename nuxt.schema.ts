import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    i18n: group({
      title: "I18n",
      description: "Internationalization settings",
      icon: "i-tabler-language-katakana",
      fields: {
        languages: field({
          type: "array",
          title: "Available lang",
          description: "Langs to be displayed",
          default: ["en", "fr"],
        }),
      },
    }),
    seo: group({
      title: "SEO",
      description: "SEO configuration",
      icon: "lucide:search",
      fields: {
        title: field({
          type: "string",
          title: "Title",
          description:
            "Title of your website (used in the preview of your website).",
          icon: "lucide:title",
          default: "My website",
        }),
        description: field({
          type: "string",
          title: "Description",
          description:
            "Description of your website (used in the preview of your website).",
          icon: "lucide:description",
          default: "My website description",
        }),
        url: field({
          type: "string",
          title: "URL",
          description: "Public URL of your website.",
          icon: "lucide:link",
          default: "https://www.zettascale.tech/",
        }),
        lang: field({
          type: "string",
          title: "Language",
          description: "The language that you want to use for your website.",
          icon: "lucide:language",
          default: "en",
          required: ["en", "fr"],
        }),
      },
    }),
    socials: group({
      title: "Socials",
      description: "Socials configuration",
      icon: "lucide:link",
      fields: {
        github: field({
          type: "string",
          title: "Github",
          description: "Your Github account.",
          icon: "lucide:github",
          default: "https://github.com/ZettaScaleLabs",
        }),
        discord: field({
          type: "string",
          title: "Discord",
          description: "Org discord invite link",
          icon: "lucide:discord",
          default: "https://discordservers.com/server/940570677981884456",
        }),
        linkedin: field({
          type: "string",
          title: "Linkedin",
          description: "Your Linkedin account.",
          icon: "lucide:linkedin",
          default: "https://fr.linkedin.com/company/zettascaletech",
        }),
      },
    }),
  },
});
