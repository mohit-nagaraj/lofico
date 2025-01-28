import express from "express";
import passport from "../config/passport.js";
import {forgotPassword, googleAuth} from "../controllers/authcontroller.js"

const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", {scope: ["profile", "email"]})
)

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failure" }),
  (req, res, next) => {
    console.log("Session after authentication:", req.session); 
    console.log("Authenticated user:", req.user); 
    googleAuth(req, res); 
  }
);


router.post("/forgot-password", forgotPassword)

export default router;
