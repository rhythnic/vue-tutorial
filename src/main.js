import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import handleError from './lib/handle-error-plugin'

Vue.config.productionTip = false
Vue.use(handleError, { store })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
