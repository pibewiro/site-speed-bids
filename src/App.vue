<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueGlide);


export default {
  name: 'App',
};
</script>

<style>
:root {
  --primaryColor: #29303b;
  --hoverColor: #000;
  --siteText: #f4f4f4;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.site-btn {
  background: var(--primaryColor);
  color: var(--siteText);
  /* padding-left: 70px;
  padding-right: 70px; */
  border: none;
}

.site-btn:hover {
  color: var(--siteText);
  background: var(--hoverColor);
}
</style>
