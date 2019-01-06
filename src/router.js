import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('./views/Home.vue'),
        footer: () => import('./components/HomeFooter.vue')
      },
      meta: {
        title: 'Victor Mendele',
        metaTags: [
          {
            name: 'Description',
            content: `Passionné par le développement depuis quelques années, j'ai commencé avec des technologies natives avant de tomber amoureux du web.`
          }
        ]
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
      },
      meta: {
        title: 'Victor Mendele - A propos',
        metaTags: [
          {
            name: 'Description',
            content: `Je suis actuellement étudiant en licence professionnelle métiers du numérique parcours Développeur Web / Designer Web à l'IUT de Mulhouse. J'ai commencé le développement avec Unity il y a quelques années, avant de m'intéresser au Web.`
          }
        ]
      }
    },
    {
      path: '/project',
      name: 'projects',
      components: {
        default: () => import('./views/Projects.vue')
      },
      meta: {
        title: 'Victor Mendele - Projects',
        metaTags: [
          {
            name: 'Description',
            content: 'Voici une sélection de différents projets sur lesquels j\'ai pu travailler'
          }
        ]
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
  ],
})

router.afterEach((to) => {
  if (to.meta.title !== undefined) {
    document.title = to.meta.title
  }
  if (to.meta.metaTags !== undefined) {
    to.meta.metaTags.forEach(m => {
      let element = document.head.querySelector(`meta[name=${m.name}]`)
      if (element !== undefined && element !== null) {
        element.setAttribute('content', m.content)
      }
    })
  }
})

export default router