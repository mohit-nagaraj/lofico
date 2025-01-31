import express from "express";
import { likeSong } from "../controllers/songController.js";
const router = express.Router()

router.patch('/:name/like', likeSong);

export default router;