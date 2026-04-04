import express from "express"
const app=express();

import dotenv from "dotenv"
dotenv.config();

app.use(cors());
app.use(express.json());

import connectDB from "./config/mongodb.js";
connectDB();
import userRouter from "./routes/userRoutes.js";


app.use("/api/v1/user",userRouter);
app.use("/api/v1/balance",balanceRouter);

app.listen(3000,()=>{
    console.log("app listening at the port 3000")
})