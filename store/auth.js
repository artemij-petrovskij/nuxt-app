const axios = require('axios')
import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
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
    Cookies.set('jwt-token', token)

  },
  logout({ commit }) {
    commit('clearToken')
    Cookies.remove('jwt-token')

  },
  autoAuth({dispatch}) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie
    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']

    if (isTokenValid(token)) {
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  }
}

export const getters = {
  isAuthenticated: state => !!state.token,
  token: state => state.token
}

function isTokenValid(token) {
  if (!token) {
    return false
  }

  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0

  return (new Date().getTime() / 1000) < expires
}
