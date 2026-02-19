// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-02-18',
  devtools: { enabled: true },
  
  // CSS global
  css: ['~/assets/css/main.css'],
  
  // Build configuration
  build: {
    transpile: ['@headlessui/vue']
  },

  // App metadata
  app: {
    head: {
      title: 'Institut Kamole - Excellence Académique & Internat',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Institut Kamole / Collège St François de Sales - Excellence académique depuis 1952 | Formation de qualité à Bukavu, RDC' },
        { name: 'keywords', content: 'éducation, institut, académie, RDC, congo, bukavu, enseignement, internat, secondaire, collège' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="50" text-anchor="middle" dominant-baseline="middle" font-weight="bold" fill="%23FBC102">IK</text></svg>' }
      ]
    }
  },

  // Modules
  modules: []
})
