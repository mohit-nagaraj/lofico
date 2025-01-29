import express from "express";
import passport from "../config/passport.js";
import { getProfile, googleAuth} from "../controllers/authcontroller.js"
import { authenticateToken } from "../utils/jwt.js";
const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", {scope: ["profile", "email"]})
)

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failure" }),
  googleAuth 
);

router.get("/profile", authenticateToken, getProfile)


export default router;
