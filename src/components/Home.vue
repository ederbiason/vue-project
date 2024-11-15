<template>
    <div class="w-full h-screen flex flex-col items-center pt-20 bg-gradient-to-br from-[#103242] to-[#06334B]">
        <div class="bg-blue-300 p-10 rounded-lg flex flex-col gap-5 shadow-lg">
            <h1 class="text-3xl font-bold">Minha Coleção de Times da NFL</h1>
            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-1">
                    <label for="nflTeam" class="font-semibold text-lg">Time da NFL</label>
                    <select v-model="newTeam.nflTeam" class="p-3 rounded-lg bg-blue-100">
                        <option disabled value="">Selecione seu time da NFL</option>
                        <option v-for="team in nflTeams" :key="team" :value="team">{{ team }}</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="superBowls" class="font-semibold text-lg">Número de Títulos do Super Bowl</label>
                    <input type="number" v-model="newTeam.superBowls" placeholder="Digite o número de títulos" class="p-3 rounded-lg bg-blue-100" />
                </div>
                <div class="flex flex-col gap-1">
                    <label for="favoritePlayers" class="font-semibold text-lg">Jogadores Favoritos</label>
                    <input type="text" v-model="newTeam.favoritePlayers" placeholder="Digite os jogadores favoritos" class="p-3 rounded-lg bg-blue-100" />
                </div>
                <div class="flex flex-col gap-1">
                    <label for="foundedYear" class="font-semibold text-lg">Ano de Fundação</label>
                    <input type="number" v-model="newTeam.foundedYear" placeholder="Digite o ano de fundação" class="p-3 rounded-lg bg-blue-100" />
                </div>
                <button 
                    @click="addTeam"
                    class="bg-blue-800 p-3 w-[200px] self-center rounded-lg text-white font-semibold"
                >
                    Adicionar Time
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useTeamStore } from '@/stores/teamStore';
import type { Team } from '@/types/types';
import { ref } from 'vue';

export default {
    setup() {
        const teamStore = useTeamStore();
        const newTeam = ref<Team>({
            nflTeam: "",
            superBowls: 0,
            favoritePlayers: "",
            foundedYear: ""
        });

        const addTeam = () => {
            if (newTeam.value.nflTeam && newTeam.value.superBowls && newTeam.value.favoritePlayers && newTeam.value.foundedYear) {
                teamStore.addTeam({ ...newTeam.value });
                newTeam.value = {
                    nflTeam: "",
                    superBowls: 0,
                    favoritePlayers: "",
                    foundedYear: ""
                };
            } else {
                alert("Por favor, preencha todos os campos!");
            }
        }

        return {
            newTeam,
            teamStore,
            addTeam,
            nflTeams: [
                "Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", 
                "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns",
                "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers",
                "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", 
                "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers",
                "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", 
                "New England Patriots", "New Orleans Saints", "New York Giants",
                "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", 
                "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", 
                "Tennessee Titans", "Washington Commanders"
            ]
        };
    }
};
</script>
