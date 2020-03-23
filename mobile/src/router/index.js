import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Cart from '../views/Cart/Cart.vue'
import Mine from '../views/Mine/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Category/Category.vue')
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }
]

const router = new VueRouter({
  routes
})

export default router
