import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

const router = Router();

router.get("/players", PlayerController.getPplayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.post("/players", PlayerController.postPlayer);

router.delete("/players/:id", PlayerController.deletePlayer);

export default router;