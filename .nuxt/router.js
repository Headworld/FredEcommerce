import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61495d62 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _5755fb17 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _a80932ce = () => interopDefault(import('..\\pages\\needhelp.vue' /* webpackChunkName: "pages_needhelp" */))
const _3601a356 = () => interopDefault(import('..\\pages\\singleproduct.vue' /* webpackChunkName: "pages_singleproduct" */))
const _e4a35000 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _61495d62,
    name: "cart"
  }, {
    path: "/login",
    component: _5755fb17,
    name: "login"
  }, {
    path: "/needhelp",
    component: _a80932ce,
    name: "needhelp"
  }, {
    path: "/singleproduct",
    component: _3601a356,
    name: "singleproduct"
  }, {
    path: "/",
    component: _e4a35000,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
