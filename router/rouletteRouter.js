import express from "express";
import { createRoulette } from "../controller/rouletteController.js";

const router = express.Router();

router.post("/create-roulette", createRoulette);
// Endpoint para abrir una ruleta
router.post("/:id/abrir");

export default router;
