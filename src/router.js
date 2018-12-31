import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeFooter from './components/HomeFooter.vue'
import AboutFooter from './components/AboutFooter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        footer: HomeFooter
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
        footer: AboutFooter
      }
    }
  ]
})
