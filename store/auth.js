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
  async login({dispatch, commit}, formData) {

      await axios.post('/api/auth/admin/login', formData)
      .then(function (response) {
        dispatch('setToken', response.data.token)

      })
      .catch(function (error) {
        commit('setError', error, {root: true})
        throw error
      });
  },
  async signup({ commit, dispatch }, formData) {
    await axios.post('/api/auth/admin/signup', formData)
      .then(function (response) {
        dispatch('setToken', response.data.token)

      })
      .catch(function (error) {
        commit('setError', error, {root: true})
        throw error
      });

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
