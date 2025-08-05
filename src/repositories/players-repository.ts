import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        statistics: {
            Overall: 93,
            Pace: 89,
            Shooting: 93,
            Dribbling: 88,
            Defending: 35,
            Physical: 78
        }
    },
    {
        id: 2,
        name: "Lionel Messi",
        club: "Inter Miami CF",
        nationality: "Argentina",
        statistics: {
            Overall: 94,
            Pace: 85,
            Shooting: 92,
            Dribbling: 96,
            Defending: 34,
            Physical: 64
        }
    },
    {
        id: 3,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Poland",
        statistics: {
            Overall: 91,
            Pace: 78,
            Shooting: 91,
            Dribbling: 86,
            Defending: 44,
            Physical: 82
        }
    },
    {
        id: 4,
        name: "Karim Benzema",
        club: "Al-Ittihad",
        nationality: "France",
        statistics: {
            Overall: 91,
            Pace: 80,
            Shooting: 89,
            Dribbling: 87,
            Defending: 39,
            Physical: 79
        }
    },
    {
        id: 5,
        name: "Raúl González",
        club: "Retired",
        nationality: "Spain",
        statistics: {
            Overall: 88,
            Pace: 75,
            Shooting: 87,
            Dribbling: 85,
            Defending: 40,
            Physical: 70
        }
    },
    {
        id: 6,
        name: "Francisco Gento",
        club: "Retired",
        nationality: "Spain",
        statistics: {
            Overall: 89,
            Pace: 92,
            Shooting: 85,
            Dribbling: 88,
            Defending: 30,
            Physical: 70
        }
    },
    {
        id: 7,
        name: "Toni Kroos",
        club: "Real Madrid",
        nationality: "Germany",
        statistics: {
            Overall: 88,
            Pace: 55,
            Shooting: 81,
            Dribbling: 83,
            Defending: 72,
            Physical: 68
        }
    },
    {
        id: 8,
        name: "Dani Carvajal",
        club: "Real Madrid",
        nationality: "Spain",
        statistics: {
            Overall: 84,
            Pace: 77,
            Shooting: 45,
            Dribbling: 78,
            Defending: 82,
            Physical: 80
        }
    },
    {
        id: 9,
        name: "Luka Modric",
        club: "Real Madrid",
        nationality: "Croatia",
        statistics: {
            Overall: 88,
            Pace: 72,
            Shooting: 76,
            Dribbling: 89,
            Defending: 70,
            Physical: 68
        }
    },
    {
        id: 10,
        name: "Vinicius Junior",
        club: "Real Madrid",
        nationality: "Brazil",
        statistics: {
            Overall: 89,
            Pace: 95,
            Shooting: 83,
            Dribbling: 90,
            Defending: 29,
            Physical: 75
        }
    },
    {
        id: 11,
        name: "Jude Bellingham",
        club: "Real Madrid",
        nationality: "England",
        statistics: {
            Overall: 88,
            Pace: 79,
            Shooting: 82,
            Dribbling: 86,
            Defending: 75,
            Physical: 84
        }
    },
    {
        id: 12,
        name: "Rodrygo",
        club: "Real Madrid",
        nationality: "Brazil",
        statistics: {
            Overall: 85,
            Pace: 88,
            Shooting: 80,
            Dribbling: 87,
            Defending: 30,
            Physical: 70
        }
    },
    {
        id: 13,
        name: "Iker Casillas",
        club: "Retired",
        nationality: "Spain",
        statistics: {
            Overall: 89,
            Pace: 50,
            Shooting: 20,
            Dribbling: 25,
            Defending: 88,
            Physical: 70
        }
    },
    {
        id: 14,
        name: "Paolo Maldini",
        club: "Retired",
        nationality: "Italy",
        statistics: {
            Overall: 92,
            Pace: 70,
            Shooting: 40,
            Dribbling: 60,
            Defending: 96,
            Physical: 85
        }
    },
    {
        id: 15,
        name: "Zinedine Zidane",
        club: "Retired",
        nationality: "France",
        statistics: {
            Overall: 94,
            Pace: 75,
            Shooting: 88,
            Dribbling: 93,
            Defending: 60,
            Physical: 80
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const player = database.find((player) => player.id === id);

    return player;
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex((player) => player.id === id);

    if(index !== -1) {
        database.splice(index, 1);
    }
}