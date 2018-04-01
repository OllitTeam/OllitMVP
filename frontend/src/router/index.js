import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Lecture from '@/components/Lecture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWOrld',
      component: Main
    },
    {
      path: '/lecture',
      component: Lecture
    }
  ]
})
