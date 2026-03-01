// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // CSS global
  css: ['~/assets/css/main.css'],

  // Variables d'environnement serveur (privées)
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || '',
    smtpPort: process.env.SMTP_PORT || '587',
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
  },
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
        { rel: 'icon', type: 'image/jpeg', href: '/images/logos/logo.jpg' },
        { rel: 'shortcut icon', href: '/images/logos/logo.jpg' }
      ]
    }
  },

  // Modules
  modules: []
})
