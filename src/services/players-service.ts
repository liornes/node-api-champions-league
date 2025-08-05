import * as playersRepository from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helpers";

export const getPlayerService = async () => {
    const data = await playersRepository.findAllPlayers();
    
    let response = null;

    if(data) {
        response = ok(data);
    } else {
        response = noContent();
    }

    return response;
}