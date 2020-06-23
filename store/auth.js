const axios = require('axios');
export const state = () => ({
  token: null
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
      const { token } = await axios.post('http://localhost:3000/api/auth/admin/login', formData)
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
  isAuthrnticated: state => Boolean(state.token)
}
