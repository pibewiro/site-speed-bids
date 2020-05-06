import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../src/components/pages/Home/index.vue';
import Register from '../src/components/pages/Register.vue';
import Login from '../src/components/pages/Login.vue';
import Dashboard from '../src/components/template/Dashboard';
import Items from '../src/components/organisms/Items/index.vue'
import DashHome from '../src/components/organisms/Dashboard/index.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/items', component: Items },
  {
    path: '/dashboard',
    component: Dashboard, children: [
      { path: '/', component: DashHome },
      { path: '/login', component: Login }

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;