import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lecture from '@/components/Lecture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Lecture
    },
    {
      path: '/lecture',
      component: HelloWorld
    }
  ]
})
