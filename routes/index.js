import Vue from 'vue';
import VueRouter from 'vue-router';
import com1 from '../src/components/HelloWorld';
import Dashboard from '../src/components/template/Dashboard';
import Dashboard2 from '../src/components/template/Dashboard2';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: com1 },
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