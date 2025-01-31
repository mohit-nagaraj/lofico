import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import { connectDB } from "./db/connectDb.js";
import authRouter from "./routes/auth.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


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

