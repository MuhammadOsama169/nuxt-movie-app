// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "nuxt-lazytube",
    "@nuxtjs/device",
  ],
  runtimeConfig: {
    public: {
      NUXT_MASTER_X_KEY: process.env.NUXT_MASTER_X_KEY,
      NUXT_TMBD_KEY: process.env.NUXT_TMBD_KEY,
    },
  },
});