import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 1000,
    xl: 1170
  }
})
