import { getField, updateField } from 'vuex-map-fields';

const axios = require('axios');
const state = {
  products: null,
  product: null,
  productIm: null
};
const mutations = {
  updateField,

  GET_PRODUCTS: function (state, payload) {
    state.products = payload.data;
  },

  GET_PRODUCT: function (state, payload) {
    state.product = payload.data
    state.productIm = payload.data.image.productImages.shift();
  },

  GET_MY_PRODUCTS: function (state, payload) {
    state.products = payload.data
  }
};
const actions = {

  async deleteImage(commit, obj) {
    await axios.delete(`${process.env.VUE_APP_API_ROOT}/product/deleteImage/${obj.imageName}/${obj.id}`,
      { headers: { 'x-access-token': obj.token } });
  },

  async updateProduct({ commit }, obj) {
    const response = await axios.put(`${process.env.VUE_APP_API_ROOT}/product/${obj.id}`,
      { ...state.product }, { headers: { 'x-access-token': obj.token } })
    commit('GET_PRODUCT', response.data);
  },

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
  },

  async getProduct({ commit }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/product/${obj.id}`);
    commit('GET_PRODUCT', response.data)
  },

  async getMyProducts({ commit }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/product/my-products/${obj.id}`, {
      headers: { 'x-access-token': obj.token }
    });
    commit('GET_MY_PRODUCTS', response.data)
  },

  async getSimilarProducts({ commit }, obj) {
    const response = await axios.get(`${process.env.VUE_APP_API_ROOT}/product/${obj.category}/${obj.id}`)
    commit('GET_PRODUCTS', response.data)
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