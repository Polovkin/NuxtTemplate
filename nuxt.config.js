export default {
  /* server: {
  port: 3000,
  host: '0.0.0.0'
}, */
  /* serverMiddleware: {
    "/_ipx": "~/server/middleware/ipx.js",
  }, */
  head: {
    title: 'ad',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  styleResources: {
    scss: '@/assets/scss/core/_global.scss',
  },
  plugins: [{ src: '~/plugins/client.js', mode: 'client' }],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/stylelint-module',
      {
        /* module options */
      },
    ],
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/style-resources'],

  axios: {},
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
    postcss: {
      plugins: {
        cssnano: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
        'postcss-sort-media-queries': {
          sort: require('sort-css-media-queries'),
        },
      },
    },
  },
}
