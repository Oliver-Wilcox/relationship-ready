import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience-one',
    name: 'experienceOne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JessicaExp.vue')
  },
  {
    path: '/Programmes',
    name: 'Programmes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Programmes.vue')
  },
  {
    path: '/experience-two',
    name: 'experienceTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/maryExp.vue')
  },
  {
    path: '/experience-three',
    name: 'experienceThree',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/claudiaExp')
  },
  {
    path: '/aboutLila',
    name: 'aboutLila',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/lilaAbout')
  },

  {
    path: '/what-we-do',
    name: 'what-we-do',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/whatWeDo.vue')
  },
  {
    path: '/work-together',
    name: 'work-together',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkTogether.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageNotFound.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes,
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
})

export default router
