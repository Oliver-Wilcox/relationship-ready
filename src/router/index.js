import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jessicaExp',
    name: 'JessicaExp',
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
    path: '/maryExp',
    name: 'maryExp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/maryExp.vue')
  },
  {
    path: '/claudiaExp',
    name: 'claudiaExp',
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
