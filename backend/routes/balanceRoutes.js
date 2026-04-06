import express from "express";
const balanceRouter=express.Router();
import check from "../middlewares/check.js";
import { checkBalance ,transfer} from "../controllers/balance.js";

balanceRouter.get("/getBalance",check,checkBalance);
balanceRouter.post("/transfer",check,transfer);
// const res=await axios.post("http://localhost:3000/api/v1/balance/transfer"
export default balanceRouter