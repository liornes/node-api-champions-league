import express, { json, Request, Response } from "express";
import { getPplayer } from "./controllers/players-controller";

function createApp() {
    const app = express();

    app.use(json());

    app.get("/", getPplayer);

    return app;
}

export default createApp;