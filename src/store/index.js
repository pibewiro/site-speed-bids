import Vuex from 'vuex'
import Vue from 'vue'
import Login from './Login'

Vue.use(Vuex);

const modules = { Login };

export default new Vuex.Store({
  modules
})