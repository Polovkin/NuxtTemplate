export default {
  // target: 'server',
  target: 'static',
  server: {
    port: 3003,
    host: '0.0.0.0'
  },

  head: {
    title: 'Boro digital | UX, Web & Product design agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  styleResources: {
    scss: '@/assets/scss/core/_global.scss'
  },

  components: true,

  buildModules: [
    '@nuxtjs/svg',
    // '@nuxtjs/eslint-module',
    '@nuxtjs/device',
    'nuxt-purgecss'
    /* [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        vueI18nLoader: true,
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'Eng'
          },
          {
            code: 'ru',
            name: 'Рус'
          }
        ],
        vueI18n: i18n
      }
    ] */
  ],
  plugins: [
    { src: '~/plugins/client.js', mode: 'client' },
    '~/plugins/custom-flag.js'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  build: {
    loaders: {
      scss: { sourceMap: false }
    },
    postcss: {
      preset: {
        autoprefixer: {}
      },
      plugins: {
        cssnano: {
          preset: [
            'default',
            {
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

  image: {
    staticFilename: '[name]-[hash][ext]'
  },
  pwa: {
    icon: {
      /* icon options */
    }
  },
  purgeCSS: {
    // your settings here
  },

  publicRuntimeConfig: {
    BASE_URL: process.env.NODE_ENV === 'production' ? 'http://localhost:3000/' : 'http://localhost:3000/',
    IS_DEV: process.env.IS_DEVELOP === 'true'
  }
}
