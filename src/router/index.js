import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Registration from '../components/Registration'
import Auth from '../components/Auth'
import Tasks from '../components/Tasks'
import Task from '../components/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/task/:id',
      name: 'Task',
      component: Task
    }
  ]
})
