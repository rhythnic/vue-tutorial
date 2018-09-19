export default {
  install (Vue, { store }) {
    Vue.prototype.$catch = text => error => store.dispatch('handleError', { text, error })
  }
}
