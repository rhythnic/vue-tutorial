// Core Vuex store state/getters/mutations/actions, not namespaced

export const initialState = {
  toast: null,
  error: null,
  showError: false
}

export const getters = {
}

export const mutations = {
  resetState (state) {
    Object.assign(state, initialState)
  },
  setToast (state, data) {
    state.toast = data
  },
  setError (state, msg) {
    state.error = msg
  },
  setShowError (state, show) {
    state.showError = show
  },
  resetError (state) {
    state.error = null
    state.showError = false
  }
}

export const actions = {
  setToast ({ commit }, data) {
    return new Promise(resolve => {
      const toast = {
        ...data,
        onTimeout: () => resolve({ timeout: true })
      }
      if (data.actionText) {
        toast.onAction = () => resolve({ action: true })
      }
      commit('setToast', toast)
    })
  },
  handleError ({ commit }, { text = 'Error occurred.', error }) {
    console.error(error)
    commit('setError', error.message)
    return commit('setToast', {
      text,
      error: true,
      actionText: 'Show',
      onAction: () => commit('setShowError', true)
    })
  }
}

export default {
  state: { ...initialState },
  getters,
  mutations,
  actions
}
