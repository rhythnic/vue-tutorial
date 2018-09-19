import Vuex from 'vuex'
import Vue from 'vue'
import mainModule from './main'
import imageModule from './image'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    image: imageModule
  },
  ...mainModule
})
