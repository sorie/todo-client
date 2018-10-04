import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
})
