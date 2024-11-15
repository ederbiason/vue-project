import Home from '@/components/Home.vue'
import NextGames from '@/components/NextGames.vue'
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
    },
    {
      path: '/games',
      name: 'games',
      component: NextGames
    }
  ]
})

export default router
