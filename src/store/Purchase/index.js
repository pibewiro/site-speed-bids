import axios from 'axios';

const state = {
  purchases: null
};

const mutations = {
  GET_PURCHASES: function (state, payload) {
    state.purchases = payload.data
  }
};
const actions = {
  async getPurchases({ commit }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/purchase/${obj.userId}`, {
      headers: { 'x-access-token': obj.token }
    })

    commit('GET_PURCHASES', response.data)
  }
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}