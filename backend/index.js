import express from "express"
const app=express();


import dotenv from "dotenv"
dotenv.config();

import cors from "cors"
app.use(cors());
app.use(express.json());

import connectDB from "./config/mongodb.js";
connectDB();
import userRouter from "./routes/userRoutes.js";
import balanceRouter from "./routes/balanceRoutes.js";

// const res=await axios.post("http://localhost:3000/api/v1/balance/transfer"
app.use("/api/v1/user",userRouter);
app.use("/api/v1/balance",balanceRouter);

app.listen(3000,()=>{
    console.log("app listening at the port 3000")
})