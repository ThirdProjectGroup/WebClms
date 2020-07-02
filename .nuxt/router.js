import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f486bf8 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages_course_index" */))
const _07eadc96 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _1a6cec86 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _c7fd2b5a = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages_teacher_index" */))
const _20042638 = () => interopDefault(import('..\\pages\\answer_question\\aq.vue' /* webpackChunkName: "pages_answer_question_aq" */))
const _00dc3aeb = () => interopDefault(import('..\\pages\\article\\List.vue' /* webpackChunkName: "pages_article_List" */))
const _3eb716e9 = () => interopDefault(import('..\\pages\\article\\create.vue'))
const _c4c70528 = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages_course__id" */))
const _00dfc4da = () => interopDefault(import('..\\pages\\orders\\_oid.vue' /* webpackChunkName: "pages_orders__oid" */))
const _acff47be = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages_pay__pid" */))
const _3c022956 = () => interopDefault(import('..\\pages\\player\\_vid.vue' /* webpackChunkName: "pages_player__vid" */))
const _5b7be57b = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages_teacher__id" */))
const _3e43397f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _4f486bf8,
    name: "course"
  }, {
    path: "/login",
    component: _07eadc96,
    name: "login"
  }, {
    path: "/register",
    component: _1a6cec86,
    name: "register"
  }, {
    path: "/teacher",
    component: _c7fd2b5a,
    name: "teacher"
  }, {
    path: "/aq",
    component: _20042638,
    name: "answer_question-aq"
  },  {
    path: "/article",
    component: _00dc3aeb,
    name: "article",
    children: [
      {
        name: 'Create',
        path: '/create',
        component: _3eb716e9,
      }
    ]
  },{
    path: "/course/:id",
    component: _c4c70528,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _00dfc4da,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _acff47be,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _3c022956,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _5b7be57b,
    name: "teacher-id"
  }, {
    path: "/",
    component: _3e43397f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
