import { createRouter, createWebHistory } from 'vue-router';
import PagePlaceholder from './components/PagePlaceholder.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue')
    }, {
      path: '/login',
      component: () => PagePlaceholder
    }, {
      path: '/register',
      component: () => PagePlaceholder
    }, {
      path: '/profile',
      component: () => PagePlaceholder
    }, {
      path: '/edit-profile',
      component: () => PagePlaceholder
    }, {
      path: '/search',
      component: () => PagePlaceholder
    }, {
      path: '/blog/:id',
      component: () => PagePlaceholder
    }, {
      path: '/create-blog',
      component: () => PagePlaceholder
    }, {
      path: '/edit-blog/:id',
      component: () => PagePlaceholder
    }, {
      path: '/liked-blogs',
      component: () => PagePlaceholder
    }, {
      path: '/following',
      component: () => PagePlaceholder
    }
  ]
});