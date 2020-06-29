const axios = require('axios');
export const state = () => ({
  token: false
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const { token } = await axios.post('/api/auth/admin/login', formData)
      commit('setToken', token)
      console.log('token', token)
    } catch (e) {
      console.log(e)
      throw e
    }

  },
  async signup({ commit, dispatch }, formData) {
    try {
      const { token } = await axios.post('/api/auth/admin/signup', formData)
      dispatch('setToken', token)
      console.log('token', token)
    } catch (e) {
      console.log(e)
      throw e
    }

  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit }) {
    commit('clearToken')
  }
}

export const getters = {
  isAuthenticated: state => !!state.token,
  token: state => state.token
}
