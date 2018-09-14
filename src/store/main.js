// Core Vuex store state/getters/mutations/actions, not namespaced

export const initialState = {
  toast: null,
  errors: [],
  showErrors: false
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
  pushError (state, error) {
    state.errors.push(error)
  },
  setShowErrors (state, show) {
    state.showErrors = show
  },
  resetErrors (state) {
    state.errors = []
    state.showErrors = false
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
    commit('pushError', error)
    return commit('setToast', {
      text,
      error: true,
      actionText: 'Show',
      onAction: () => commit('setShowErrors', true)
    })
  }
}

export default {
  state: { ...initialState },
  getters,
  mutations,
  actions
}
