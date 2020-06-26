import axios from "axios";

const state = {
  messages: {},
};

const mutations = {
  GET_MESSAGES: function (state, payload) {
    state.messages = payload.data;
  },
};

const actions = {
  async getMessages({ commit }, obj) {
    const response = await axios.get(
      `${process.env.VUE_APP_API_ROOT}/message/${obj.senderId}/${obj.receiverId}`,
      {
        headers: { "x-access-token": obj.token },
      }
    );
    commit("GET_MESSAGES", response.data);
  },

  async messageAdminUser(commit, obj) {
    await axios.post(
      `${process.env.VUE_APP_API_ROOT}/message/send-message-admin/${obj.receiverId}/${obj.senderId}`,
      { ...obj.data },
      {
        headers: { "x-access-token": obj.token },
      }
    );
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};