import Vuex from 'vuex';
import Vue from 'vue';
import Auth from './Auth';
import User from './User';
import Product from './Product';
import Favorite from './Favorite';

Vue.use(Vuex);

const modules = { Auth, User, Product, Favorite };

export default new Vuex.Store({
  modules,
})