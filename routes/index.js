import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../src/components/template/Home.vue';
import Register from '../src/components/home/Register.vue';
import Login from '../src/components/home/Login.vue';
import Dashboard from '../src/components/template/Dashboard';
import Dashboard2 from '../src/components/template/Dashboard2';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/dash',
    component: Dashboard, children: [
      { path: '/', component: Dashboard2 }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;