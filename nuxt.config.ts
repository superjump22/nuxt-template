// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@vueuse/nuxt'],

  devtools: { enabled: true },

  css: [
    '@unocss/reset/tailwind-compat.css',
  ],

  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: true,
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
