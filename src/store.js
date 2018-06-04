import Vue from 'vue'
import Vuex from 'vuex'

import { invokeService } from './utils/serviceUtils'

Vue.use(Vuex)

const state = {
  info: '',
  ratedJokes: [],
  loading: false
}

const getters = {}

const actions = {
  asyncAction (context, action) {
    context.dispatch('startLoading')
    context.dispatch(action).then(() => {
      context.dispatch('stopLoading')
    })
  },
  fetchJoke ({commit}) {
    return invokeService({
      url: 'https://icanhazdadjoke.com/',
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then((res) => {
      commit('setJoke', res)
    })
  },
  getJoke (context, id) {
    console.log('context', context)
    const ratedJokes = context.state.ratedJokes
    const joke = ratedJokes[id]
    context.commit('setJoke', joke)
  },
  rateJoke (context, { currentJoke, rating }) {
    context.commit('rateJoke', { currentJoke, rating })
  },
  startLoading ({commit}) {
    commit('toggleLoader', true)
  },
  stopLoading ({commit}) {
    commit('toggleLoader', false)
  }
}

const mutations = {
  setJoke (state, info) {
    state.info = info
  },
  rateJoke (state, res) {
    const { currentJoke, rating } = res
    const { id, joke } = currentJoke
    state.ratedJokes = {
      ...state.ratedJokes,
      [id]: {
        id,
        joke,
        rating: rating ? 'Like' : 'Dislike'
      }
    }
  },
  toggleLoader (state, res) {
    state.loading = res
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
