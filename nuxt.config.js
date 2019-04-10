import pkg from './package'
import messages from './locales'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'pl-PL',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicon-128.png' },
      { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon-196x196.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Router configuration
  */
  router: {
    scrollBehavior(to) {
      if (to.hash && document.querySelector(to.hash)) {
        return window.scrollTo({ top: document.querySelector(to.hash).offsetTop + window.innerHeight, behavior: 'smooth' });
      }
      let position = false
      return new Promise(resolve => {
        // wait for the out transition to complete (if necessary)
        window.$nuxt.$once('triggerScroll', () => {
          // coords will be used if no selector is provided,
          // or if the selector didn't match any element.
          if (to.hash && document.querySelector(to.hash)) {
            // scroll to anchor by returning the selector
            // return window.scrollTo({ top: document.querySelector(to.hash).offsetTop + window.innerHeight, behavior: 'smooth' });
            resolve({ x: 0, y: document.querySelector(to.hash).offsetTop + window.innerHeight })
          }
          return window.scrollTo({ top: 0, behavior: 'smooth' });
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
    { src:'~/plugins/lax.js', ssr: false }
    // { src: "~/plugins/aos", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
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
    }],
    // Doc: https://nuxt-community.github.io/nuxt-i18n/

  ],

  /*
  ** Style resources module configuration
  */
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_mixins.scss'
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
    extend(config, ctx) {
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
