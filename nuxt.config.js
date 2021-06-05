export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NuxtTemplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  styleResources: {
    scss: '@/assets/scss/core/_global.scss'
  },
  plugins: [
    { src: './plugins/custom-flag.js', mode: 'client' }

  ],
  mode: 'universal',
  components: true,

  buildModules: [
    '@nuxtjs/svg',
    '@nuxtjs/device'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],

  axios: {},
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: 'autoplace'
        }
      },
      plugins: {
        cssnano: {
          preset: [
            'default', {
              discardComments: {
                removeAll: true
              }
            }
          ]
        },
        'postcss-sort-media-queries': {
          sort: require('sort-css-media-queries')
        }
      }

    }
  },
  device: {
    refreshOnResize: true
  }
}
