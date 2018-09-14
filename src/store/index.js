import Vuex from 'vuex'
import Vue from 'vue'
import mainModule from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  ...mainModule
})
