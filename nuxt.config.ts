// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  site: {
    url: 'https://dhakadistributions.com',
    name: 'Dhaka Distributions',
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-simple-sitemap"]
})