import Vuex from 'vuex';
import Vue from 'vue';
import Auth from './Auth';
import User from './User';
import Product from './Product';
import Favorite from './Favorite';
import Follow from './Follow';
import Buyer from './Buyer';


Vue.use(Vuex);

const modules = { Auth, User, Product, Favorite, Follow, Buyer };

export default new Vuex.Store({
  modules,
})