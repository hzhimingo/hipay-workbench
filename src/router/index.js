import { createRouter, createWebHashHistory } from 'vue-router';
import Hello from '../views/Hello.vue';
import Login from '../views/Login.vue';
import Registry from '../views/Registry.vue';

const routes = [
  {
    path: '/hello',
    name: 'hello',
    component: Hello,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/registry',
    name: 'registry',
    component: Registry,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
