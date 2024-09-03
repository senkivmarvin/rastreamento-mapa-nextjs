// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  css: ['~/assets/css/tailwind.css','~/assets/css/global.css'],
  
  modules: ['@nuxtjs/tailwindcss']
})
