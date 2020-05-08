const axios = require('axios');
const state = {};
const mutations = {};
const actions = {
  async storeProduct(commit, obj) {
    await axios.post(`${process.env.VUE_APP_API_ROOT}/product`, { ...obj.data }, { headers: { 'x-access-token': obj.token } })
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