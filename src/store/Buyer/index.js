import axios from 'axios';

const state = {
  buyers: {},
  addedPrice: null,
  liveBids: {},
};

const mutations = {
  GET_BUYERS: function (state, payload) {
    state.buyers = payload.data
  },

  ADDED_PRICE: function (state, payload) {
    state.addedPrice = payload.data
  },

  VIEW_BIDS: function (state, payload) {
    state.liveBids = payload.data
  }
};

const actions = {
  async getBuyers({ commit }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/buyer/${obj.id}`,
      { headers: { 'x-access-token': obj.token } }
    )
    commit('GET_BUYERS', response.data);
  },

  async addPrice({ commit }, obj) {
    const response = await axios.put(`${process.env.VUE_APP_API_ROOT}/buyer/${obj.id}`, { ...obj.data },
      { headers: { 'x-access-token': obj.token } }
    )

    commit('ADDED_PRICE', response.data)
  },

  async addLiveBidder(commit, obj) {
    await axios.post(`${process.env.VUE_APP_API_ROOT}/buyer/liveBid`, { ...obj.data }, {
      headers: { 'x-access-token': obj.token }
    })
  },

  async viewLiveBids({ commit }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/buyer/view-bids/${obj.userId}`, {
      headers: { 'x-access-token': obj.token }
    });

    commit('VIEW_BIDS', response.data);
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