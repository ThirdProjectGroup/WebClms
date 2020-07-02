import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2154aa29 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages_course_index" */))
const _88b69c8a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _00f7c941 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _72248ece = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages_teacher_index" */))
const _4907341b = () => interopDefault(import('..\\pages\\answer_question\\anq.vue' /* webpackChunkName: "pages_answer_question_anq" */))
const _172922d1 = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages_course__id" */))
const _90cfb664 = () => interopDefault(import('..\\pages\\orders\\_oid.vue' /* webpackChunkName: "pages_orders__oid" */))
const _d75dd274 = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages_pay__pid" */))
const _17eb9ede = () => interopDefault(import('..\\pages\\player\\_vid.vue' /* webpackChunkName: "pages_player__vid" */))
const _1383ecb6 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages_teacher__id" */))
const _1c05e2b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/course",
    component: _2154aa29,
    name: "course"
  }, {
    path: "/login",
    component: _88b69c8a,
    name: "login"
  }, {
    path: "/register",
    component: _00f7c941,
    name: "register"
  }, {
    path: "/teacher",
    component: _72248ece,
    name: "teacher"
  }, {
    path: "/qa",
    component: _4907341b,
    name: "qa"
  }, {
    path: "/course/:id",
    component: _172922d1,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _90cfb664,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _d75dd274,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _17eb9ede,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _1383ecb6,
    name: "teacher-id"
  }, {
    path: "/",
    component: _1c05e2b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
