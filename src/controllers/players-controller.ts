import {Request, Response} from "express";
import * as PlayerService from "../services/players-service";

export const getPplayer = async (req: Request, res: Response) => {
    const response = await PlayerService.getPlayerService();
    
    res.status(response.statusCode).json(response.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const response = await PlayerService.getPlayerbyIdService(id);

    res.status(response.statusCode).json(response.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;

    const response = await PlayerService.createPlayerService(bodyValue);

    if(response) {
        res.status(response.statusCode).json(response.body);
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const response = await PlayerService.deletePlayerService(id);

    res.status(response.statusCode).json(response.body);
}