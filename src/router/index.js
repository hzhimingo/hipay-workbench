import { createRouter, createWebHashHistory } from 'vue-router';
import Hello from '../views/Hello.vue';

const routes = [
  {
    path: '/hello',
    name: 'hello',
    component: Hello,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
