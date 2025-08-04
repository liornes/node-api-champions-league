import {Request, Response, json} from "express";

export const getPplayer = (req: Request, res: Response) => {
    res.status(200).json({player: "Beckham"});
}