<template>
    <div class="container">
        <h1>Minha Coleção de Times da NFL</h1>
        <div class="form">
            <div class="inputWrap">
                <label for="nflTeam">Time da NFL</label>
                <select v-model="newTeam.nflTeam" class="input">
                    <option disabled value="">Selecione seu time da NFL</option>
                    <option v-for="team in nflTeams" :key="team" :value="team">{{ team }}</option>
                </select>
            </div>

            <div class="inputWrap">
                <label for="superBowls">Número de Títulos do Super Bowl</label>
                <input class="input" type="number" v-model="newTeam.superBowls" placeholder="Digite o número de títulos" />
            </div>

            <div class="inputWrap">
                <label for="favoritePlayers">Jogadores Favoritos</label>
                <input class="input" type="text" v-model="newTeam.favoritePlayers" placeholder="Digite os jogadores favoritos" />
            </div>

            <div class="inputWrap">
                <label for="foundedYear">Ano de Fundação</label>
                <input class="input" type="number" v-model="newTeam.foundedYear" placeholder="Digite o ano de fundação" />
            </div>

            <button class="button" @click="addTeam">Adicionar Time</button>

            <h2>Lista de Times</h2>
            <ul>
                <li v-for="(team, index) in teamStore.teamCollection" :key="index">
                    <strong>{{ team.nflTeam }}</strong> - Títulos do Super Bowl: {{ team.superBowls }} - Jogadores
                    Favoritos: {{ team.favoritePlayers }} - Ano de Fundação: {{ team.foundedYear }}
                    <button @click="removeTeam(index)">Remover</button>
                </li>
            </ul>
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
        };

        const removeTeam = (index: number) => {
            teamStore.removeTeam(index);
        };

        return {
            newTeam,
            teamStore,
            addTeam,
            removeTeam,
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

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;
    font-family: Arial, Helvetica, sans-serif;
    
    color: black;
}


.inputWrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
}

.form {
    display: flex;
    flex-direction: column;
    width: 300px;
}

.input {
    border-radius: 8px;
    padding: 10px;
}

.button {
    border-radius: 8px;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    margin-top: 20px;
}


</style>
