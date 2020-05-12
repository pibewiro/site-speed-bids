import { getField, updateField } from 'vuex-map-fields';
import axios from 'axios';

const state = {
  user: null,
};

const mutations = {
  updateField,
  GET_USER: function (state, payload) {
    state.user = payload.data
  }
};

const actions = {
  async updateUser() {
    console.log(state)
  },

  async getUser({ commit }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/user/${obj.id}`)
    console.log(response.data.data)
    commit('GET_USER', response.data);
  },
  async register(commit, obj) {
    await axios.post(`${process.env.VUE_APP_API_ROOT}/user`, { ...obj })
  },

  async registerEmail(commit, obj) {
    await axios.get(`${process.env.VUE_APP_API_ROOT}/user/${obj.email}/${obj.firstname}/${obj.lastname}`);
  }
};

const getters = {
  getField
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

