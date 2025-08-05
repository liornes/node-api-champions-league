export interface PlayerModel {
    id: number,
    name: string,
    club: string,
    nationality: string,
    statistics: {
        Overall: number,
        Pace: number,
        Shooting: number,
        Dribbling: number,
        Defending: number,
        Physical: number
    }
}
