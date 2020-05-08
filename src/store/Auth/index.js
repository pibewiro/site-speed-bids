import axios from 'axios'

const state = {
  token: {},
  auth: {}

};
const mutations = {
  authData: (state, resp) => {
    state.token = resp.user.token;
    state.auth = resp
  }
};
const actions = {
  async login({ commit }, obj) {
    const response = await axios.post(`${process.env.VUE_APP_API_ROOT}/auth`, { ...obj });
    console.log(response.data)
    commit('authData', response.data);
  }
};
const getters = {
};


export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}