import express from "express";
const balanceRouter=express.Router();
import check from "../middlewares/check";

balanceRouter.get("/getBalance",check,getBalance);