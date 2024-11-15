import Home from '@/components/Home.vue'
import TeamList from '@/components/TeamList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/times',
      name: 'times',
      component: TeamList
    }
  ]
})

export default router
