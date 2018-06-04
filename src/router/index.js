import Vue from 'vue'
import Router from 'vue-router'
import Joke from '@/components/Joke/index'
import Summary from '@/components/Summary/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Joke',
      component: Joke
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/joke/:id',
      name: 'JokeDetails',
      component: Joke
    }
  ]
})
