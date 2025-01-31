import express from "express";
import { getProfile } from "../controllers/authcontroller.js"
import { authenticateToken } from "../utils/jwt.js";
const router = express.Router();


router.get("/profile", authenticateToken, getProfile)


export default router;
