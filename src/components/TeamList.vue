<script lang="ts">
import { useTeamStore } from '@/stores/teamStore'
import type { Team } from '@/types/types'

export default {
    setup() {
        const teamStore = useTeamStore()

        const removeTeam = (index: number) => {
            teamStore.removeTeam(index)
        };

        return {
            teamStore,
            removeTeam
        }
    }
}
</script>

<template>
    <div class="w-full h-screen flex flex-col items-center pt-20 bg-gradient-to-br from-[#103242] to-[#06334B]">
        <h2 class="text-3xl font-bold text-white mb-5">Lista de Times</h2>
        <ul v-if="teamStore.teamCollection.length > 0" class="flex flex-col gap-5 w-[500px]">
            <li v-for="(team, index) in teamStore.teamCollection" :key="index" class="bg-blue-200 p-5 rounded-lg flex flex-col gap-3">
                <div class="flex items-center justify-between">
                    <p class="text-2xl font-bold">{{ team.nflTeam }}</p>
                    <p class="font-semibold text-lg">Super Bowl: {{ team.superBowls }} 🏆</p>
                </div>

                <div class="flex flex-col gap-2 text-lg">
                    <p><span class="font-semibold">Jogadores Favoritos:</span> {{ team.favoritePlayers }}</p>
                    <p><span class="font-semibold">Ano de Fundação:</span> {{ team.foundedYear }}</p>
                </div>

                <button @click="removeTeam(index)" class="bg-red-500 text-white p-2 rounded-lg self-end">Remover</button>
            </li>
        </ul>
        <p v-else class="text-white text-xl mt-10">Sua lista de times está vazia! ;-;</p>
    </div>
</template>