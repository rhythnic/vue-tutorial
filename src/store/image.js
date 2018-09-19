import { set, mapKeys, replaceRecordInList } from '../lib/vuex-helpers'
import pixabayApi from '../services/pixabay'

export const initialState = {
  images: [],
  page: {
    totalItems: 0,
    items: []
  }
}

export const getters = {
  pageImages: mapKeys('images', 'id')
}

export const mutations = {
  setPage: set('page'),
  replaceImage: replaceRecordInList('images', 'id')
}

export const actions = {
  async fetchImages ({ commit }) {
    const { hits, totalHits } = await pixabayApi.getImages()
    hits.forEach(x => commit('replaceImage', x))
    commit('setPage', { totalItems: totalHits, items: hits.map(x => x.id) })
  }
}

export default {
  namespaced: true,
  state: { ...initialState },
  getters,
  mutations,
  actions
}
