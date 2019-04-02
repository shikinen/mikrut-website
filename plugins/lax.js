import extend from '~/utils/extend-vue-app'
import lax from 'lax.js'

/* eslint-disable */
export default async function ({ app }) {
  extend(app, {
    created () {
      lax.setup()

      document.addEventListener('scroll', () => {
        lax.update(window.scrollY)
      }, false)
    }
  })
}
