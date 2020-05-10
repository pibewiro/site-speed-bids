const axios = require('axios');
const state = {
  products: null,
};
const mutations = {
  GET_PRODUCTS: function (state, payload) {
    state.products = payload.data;
  }
};
const actions = {
  async storeProduct(commit, obj) {
    console.log(obj)
    const fd = new FormData();
    fd.set('productName', obj.data.productName);
    fd.set('price', obj.data.price);
    fd.set('category', obj.data.category);
    fd.set('description', obj.data.description);
    fd.set('user', obj.data.user)
    fd.append('defaultImage', obj.data.image.defaultImage);

    for (let i = 0; i < obj.data.image.productImages.length; i++) {
      fd.append('productImages', obj.data.image.productImages[i])
    }

    await axios.post(`${process.env.VUE_APP_API_ROOT}/product`, fd,
      { headers: { 'Content-Type': 'multipart/form-data', 'x-access-token': obj.token } })
  },

  async getProducts({ commit }) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/product`);
    commit('GET_PRODUCTS', response.data);
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