const state = {
  token: {}
};
const mutations = {
  authData: (state, resp) => {
    state.token = resp.token;
  }
};
const actions = {
  async login({ commit }, obj) {
    const response = await axios.post(`${process.env.VUE_APP_API_ROOT}/auth`, { ...obj });
    commit('authData', response.data);
  }
};
const getters = {};
import axios from 'axios'

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}