import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import userRouter from "./routes/userRoute.js";
import "./config/passport.js"; 
import { connectDB } from "./db/connectDb.js";
import authRouter from "./routes/auth.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false, 
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors());


app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);



app.listen(port, () => {
  connectDB();
  console.log(`Server running on http://localhost:${port}`);
});

