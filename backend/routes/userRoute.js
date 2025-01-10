import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", createUser );
userRouter.post("/login", loginUser );

export default userRouter;