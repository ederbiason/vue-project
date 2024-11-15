export interface Team {
    nflTeam: string;
    superBowls: number;
    favoritePlayers: string;
    foundedYear: string;
}

export interface GameResponse {
    game: {
        id: number;
        date: {
            date: string;
            time: string;
            timestamp: number;
            timezone: string;
        }
        venue?: {
            name: string;
            city: string;
        }
    }
    teams: {
        home: {
            id: number;
            name: string;
            logo: string;
        }
        away: {
            id: number;
            name: string;
            logo: string;
        }
    }
}
