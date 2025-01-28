import express from "express";
import passport from "../config/passport.js";
import { googleAuth} from "../controllers/authcontroller.js"

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




export default router;
