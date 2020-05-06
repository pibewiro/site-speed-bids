const state = {};

const mutation = {};

const actions = {
  async register(commit, obj) {
    await axios.post(`${process.env.VUE_APP_API_ROOT}/user`, { ...obj })
  }
};

const getters = {};

import axios from 'axios';

export default {
  namespaced: true,
  state,
  mutation,
  actions,
  getters
}

