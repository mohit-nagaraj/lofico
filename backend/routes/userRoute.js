import { Router } from "express";
import { createUser, loginUser } from "../controllers/authcontroller.js";

const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);

export default userRouter;
