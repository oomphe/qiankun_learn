import Vue from 'vue'
import VueRouter from 'vue-router'
import '../../public-path'
Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/child'
  },
  {
    path: '/child',
    component: () => import('../components/child.vue')
  }
]

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
  mode: 'history',
  routes
})

export default router