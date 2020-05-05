import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../src/components/pages/Home/index.vue';
import Register from '../src/components/pages/Register.vue';
import Login from '../src/components/pages/Login.vue';
import Dashboard from '../src/components/template/Dashboard';
import Dashboard2 from '../src/components/template/Dashboard2';
import Items from '../src/components/organisms/Items/index.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/items', component: Items },
  {
    path: '/dash',
    component: Dashboard, children: [
      { path: '/', component: Dashboard2 },
      { path: '/login', component: Login }

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;