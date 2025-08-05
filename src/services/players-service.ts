import { PlayerModel } from "../models/player-model";
import { PlayerStatisticsmodel } from "../models/player-statistics-model";
import * as playersRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helpers";

export const getPlayerService = async () => {
    const data = await playersRepository.findAllPlayers();
    
    let response = null;

    if(data) {
        response = HttpResponse.ok(data);
    } else {
        response = HttpResponse.noContent();
    }

    return response;
}

export const getPlayerbyIdService = async (id: number) => {
    const data = await playersRepository.findPlayerById(id);

    let response = null;

    if(data) {
        response = HttpResponse.ok(data)
    } else {
        response = HttpResponse.noContent();
    }

    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if(player !== undefined) {
        await playersRepository.insertPlayer(player);

        response = HttpResponse.created();
    }else {
        response = HttpResponse.badRequest();
    }

    return response;
}

export const updatePlayerService = async (id: number, statistics: PlayerStatisticsmodel) => {

}

export const deletePlayerService = async (id: number) => {
    let response = null;

    await playersRepository.deleteOnePlayer(id);

    response = HttpResponse.ok({ message: "Deleted" });

    return response;
}