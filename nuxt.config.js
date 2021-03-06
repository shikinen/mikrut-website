import pkg from './package'
import messages from './locales'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Detektyw Kamil Mikrut – Agencja Detektywistyczna Warszawa Kraków Katowice Poznań Gdańsk Wrocław Łódź',
    htmlAttrs: {
      lang: 'pl-PL'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Detektyw Kamil Mikrut – Agencja  świadcząca usługi detektywistyczne – zdrada i rozwód, alimenty i kontrola opieki nad dziećmi, sprawdzenia pracownicze' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Detektyw Mikrut' },
      { hid: 'og:url', property: 'og:url', content: 'https://detektywmikrut.pl/' },
      { hid: 'og:title', property: 'og:title', content: 'Detektyw Kamil Mikrut – bezpiecznie, dyskretnie, legalnie ' },
      { hid: 'og:image', property: 'og:image', content: 'https://detektywmikrut.pl/img/og-image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicon-128.png' },
      { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon-196x196.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Router configuration
  */
  router: {
    scrollBehavior (to) {
      if (to.hash && document.querySelector(to.hash)) {
        return window.scrollTo({ top: document.querySelector(to.hash).offsetTop + window.innerHeight, behavior: 'smooth' })
      }
      return new Promise(resolve => {
        window.$nuxt.$once('triggerScroll', () => {
          if (to.hash && document.querySelector(to.hash)) {
            resolve({ x: 0, y: document.querySelector(to.hash).offsetTop + window.innerHeight })
          }
          return window.scrollTo({ top: 0 })
        })
      })
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF163D' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/_main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/global-components',
    '~plugins/vue-lazyload',
    '~plugins/directives',
    { src: '~/plugins/lax.js', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~plugins/vue-mq', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Polski',
          code: 'pl',
          iso: 'pl'
        }
      ],
      strategy: 'prefix_except_default',
      parsePages: false,
      defaultLocale: 'pl',
      vueI18n: {
        fallbackLocale: 'pl',
        messages
      }
    }]
    // Doc: https://nuxt-community.github.io/nuxt-i18n/

  ],

  /*
  ** Style resources module configuration
  */
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_mixins.scss',
      '@/assets/scss/_typography.scss'
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
