import axios from "axios";

const state = {
  follows: null
}

const mutations = {
  GET_FOLLOWS: function (state, payload) {
    state.follows = payload.data;
  }
};

const actions = {
  async addFollow({ commit }, obj) {
    const response = await axios.post(`${process.env.VUE_APP_API_ROOT}/follow`, { userId: obj.userId, followId: obj.id },
      {
        headers: { 'x-access-token': obj.token }
      })

    commit('GET_FOLLOWS', response.data)
  },

  async getFollows({ commit }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/follow/${obj.id}`, {
      headers: { 'x-access-token': obj.token }
    })

    commit('GET_FOLLOWS', response.data);
  }
}


const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}