<template>
  <div class="w-full h-full flex flex-col items-center pt-20 bg-gradient-to-br from-[#103242] to-[#06334B] pb-10">
    <h2 class="text-3xl font-bold text-white mb-5">Lista dos próximos jogos</h2>
    <div v-if="loading">Carregando jogos...</div>
    <div v-else>
      <div v-if="games.length > 0" class="">
        <ul class="flex flex-col gap-3 text-center items-center">
          <li v-for="game in games" :key="game.game.id" class="bg-blue-100 w-full flex flex-col items-center rounded-lg p-2">
            <div class="flex text-lg items-center gap-3">
              <div class="flex items-center gap-2 font-semibold">
                {{ game.teams.home.name }} 
                <img :src="game.teams.home.logo" alt="Logo do time da casa" class="w-12 h-12"> 
              </div>
              <p class="font-bold">
                vs 
              </p>
              <div class="flex items-center gap-2 font-semibold">
                <img :src="game.teams.away.logo" alt="Logo do time visitante" class="w-12 h-12"> 
                {{ game.teams.away.name }}
              </div>
            </div>
            
            <div class="flex justify-between px-10 w-full">
              <p class="font-semibold">{{ formatDate(game.game.date.date) }} - {{ game.game.date.time }}</p>
              <p class="font-semibold">{{ game.game.venue?.name || 'Local não especificado' }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="text-2xl text-white mt-10">Sem jogos para os próximos dias.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { GameResponse } from '@/types/types'
import moment from 'moment'
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const games = ref<GameResponse[]>([])
    const loading = ref(true)

    onMounted(async () => {
      try {
        const response = await fetch('https://v1.american-football.api-sports.io/games?league=1&season=2024&timezone=America/Sao_Paulo', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v1.american-football.api-sports.io',
            'x-rapidapi-key': import.meta.env.VITE_NFL_API_KEY
          }
        })
        const data = await response.json()

        const currentTimestamp = Math.floor(Date.now() / 1000)
        const oneWeekLaterTimestamp = currentTimestamp + 7 * 24 * 60 * 60 

        games.value = data.response.filter((game: GameResponse) => {
          const gameTimestamp = game.game.date.timestamp
          return gameTimestamp > currentTimestamp && gameTimestamp <= oneWeekLaterTimestamp
        })
      } catch (error) {
        console.error('Erro ao buscar os jogos:', error)
      } finally {
        loading.value = false
      }
    })

    const formatDate = (date: string) => {
      return moment(date).format('DD/MM/YYYY')
    }

    return {
      games,
      loading,
      formatDate
    }
  }
})
</script>
