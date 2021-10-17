export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ad',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  styleResources: {
    scss: '@/assets/scss/core/_global.scss'
  },
  plugins: [
  ],
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {
  }
}
