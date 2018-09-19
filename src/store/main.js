// Core Vuex store state/getters/mutations/actions, not namespaced

export const initialState = {
  toast: {
    correlationId: null,
    text: '',
    secondaryText: '',
    isError: false,
    actionText: '',
    open: false,
    timerId: null,
    timeout: 4000,
    result: null
  },
  error: {
    message: '',
    show: false
  }
}

export const getters = {
}

export const mutations = {
  resetState (state) {
    Object.assign(state, initialState)
  },
  setToast (state, data) {
    state.toast = { ...initialState, ...data, open: true }
  },
  setError (state, message) {
    state.error = { message, show: false }
  },
  setShowError (state, show) {
    state.error.show = show
  },
  resetError (state) {
    state.error = initialState.error
  },
  setToastTimerId (state, timerId) {
    state.toast.timerId = timerId
  },
  resolveToast (state, result) {
    window.clearTimeout(state.toast.timerId)
    state.toast.result = result
    state.toast.open = false
  }
}

export const actions = {
  setToast ({ commit, state }, data) {
    commit('setToast', data)
    commit('setToastTimerId', setTimeout(() => {
      commit('resolveToast', 'timeout')
    }, state.toast.timeout))
  },
  handleError ({ commit }, { text = 'Error occurred.', error }) {
    console.error(error)
    commit('setError', error.message)
    return commit('setToast', {
      correlationId: 'error',
      text,
      isError: true,
      actionText: 'Show'
    })
  }
}

export default {
  state: { ...initialState },
  getters,
  mutations,
  actions
}
