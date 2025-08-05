import { Router } from "express";
import { getPplayer } from "./controllers/players-controller";

const router = Router();

router.get("/players", getPplayer);

export default router;