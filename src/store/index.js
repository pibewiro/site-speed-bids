import Vuex from 'vuex'
import Vue from 'vue'
import Auth from './Auth'
import User from './User'

Vue.use(Vuex);

const modules = { Auth, User };

export default new Vuex.Store({
  modules
})