import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('./views/Home.vue'),
        footer: () => import('./components/HomeFooter.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        footer: () => import('./components/AboutFooter.vue')
      }
    },
    {
      path: '/project',
      name: 'projects',
      components: {
        default: () => import('./views/Projects.vue')
      }
    },
    {
      path: '/project/:id',
      name: 'project',
      components: {
        default: () => import('./views/Project.vue'),
        footer: () => import('./components/ProjectFooter.vue')
      }
    }
  ]
})
