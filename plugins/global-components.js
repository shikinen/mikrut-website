import Vue from 'vue'

const components = require.context(
  '@/components/global',
  true,
  /[A-Z]\w+\.(vue|js)$/
)

components.keys().forEach(fileName => {
  const componentConfig = components(fileName)
  const componentName = fileName.split('/').pop().split('.')[0]

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
