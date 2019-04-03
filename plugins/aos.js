import AOS from 'aos'
import 'aos/dist/aos.css'

/* eslint-disable */
export default ({ app }) => {
  app.AOS = new AOS.init({ disable: 'phone' })
}
