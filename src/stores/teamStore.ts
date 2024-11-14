import type { Team } from '@/types/types';
import { defineStore } from 'pinia';

export const useTeamStore = defineStore('teamStore', {
    state: () => ({
        teamCollection: [] as Team[]
    }),
    actions: {
        addTeam(team: Team) {
            this.teamCollection.push(team);
        },
        removeTeam(index: number) {
            this.teamCollection.splice(index, 1);
        }
    },
    persist: true
});
