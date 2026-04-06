import express from "express";
const balanceRouter=express.Router();
import check from "../middlewares/check.js";
import { checkBalance } from "../controllers/balance.js";

balanceRouter.get("/getBalance",check,checkBalance);

export default balanceRouter