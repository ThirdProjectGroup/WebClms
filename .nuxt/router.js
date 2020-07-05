import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e9fafe12 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _25f592ee = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _0ff669b3 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _3e3191c0 = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _44687379 = () => interopDefault(import('..\\pages\\answer_question\\answer-add.vue' /* webpackChunkName: "pages/answer_question/answer-add" */))
const _72ce6197 = () => interopDefault(import('..\\pages\\answer_question\\aq.vue' /* webpackChunkName: "pages/answer_question/aq" */))
const _44e0981e = () => interopDefault(import('..\\pages\\answer_question\\question-info.vue' /* webpackChunkName: "pages/answer_question/question-info" */))
const _eb0b27e4 = () => interopDefault(import('..\\pages\\answer_question\\question-list.vue' /* webpackChunkName: "pages/answer_question/question-list" */))
const _86d313c2 = () => interopDefault(import('..\\pages\\answer_question\\question-write.vue' /* webpackChunkName: "pages/answer_question/question-write" */))
const _06c217dc = () => interopDefault(import('..\\pages\\article\\create.vue' /* webpackChunkName: "pages/article/create" */))
const _cb896358 = () => interopDefault(import('..\\pages\\article\\List.vue' /* webpackChunkName: "pages/article/List" */))
const _085a551f = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _26e58780 = () => interopDefault(import('..\\pages\\orders\\_oid.vue' /* webpackChunkName: "pages/orders/_oid" */))
const _65268494 = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages/pay/_pid" */))
const _28ff4803 = () => interopDefault(import('..\\pages\\player\\_vid.vue' /* webpackChunkName: "pages/player/_vid" */))
const _48790428 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _235d9372 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e9fafe12,
    name: "course"
  }, {
    path: "/login",
    component: _25f592ee,
    name: "login"
  }, {
    path: "/register",
    component: _0ff669b3,
    name: "register"
  }, {
    path: "/teacher",
    component: _3e3191c0,
    name: "teacher"
  }, {
    path: "/answer_question/answer-add",
    component: _44687379,
    name: "answer_question-answer-add"
  }, {
    path: "/answer_question/aq",
    component: _72ce6197,
    name: "answer_question-aq"
  }, {
    path: "/answer_question/question-info/:id",
    component: _44e0981e,
    name: "answer_question-question-info"
  }, {
    path: "/answer_question/question-list",
    component: _eb0b27e4,
    name: "answer_question-question-list"
  }, {
    path: "/answer_question/question-write",
    component: _86d313c2,
    name: "answer_question-question-write"
  }, {
    path: "/article/create",
    component: _06c217dc,
    name: "article-create"
  }, {
    path: "/article/List",
    component: _cb896358,
    name: "article-List"
  }, {
    path: "/course/:id",
    component: _085a551f,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _26e58780,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _65268494,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _28ff4803,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _48790428,
    name: "teacher-id"
  }, {
    path: "/",
    component: _235d9372,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
