import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../src/components/pages/Home/index.vue';
import Register from '../src/components/pages/Register.vue';
import Login from '../src/components/pages/Login.vue';
import Dashboard from '../src/components/template/Dashboard';
import Products from '../src/components/organisms/Products/index.vue'
// import DashHome from '../src/components/organisms/Dashboard/index.vue'
import AddProduct from '../src/components/organisms/Products/AddProduct/index.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/dashboard',
    component: Dashboard, children: [
      { path: '/', component: Products },
      { path: '/products', component: Products },
      { path: '/add-product', component: AddProduct }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;