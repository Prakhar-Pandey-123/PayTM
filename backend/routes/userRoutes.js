import express from "express"

const userRouter=express.Router();
import { signup,login } from "../controllers/auth.js";
import { searchUser } from "../controllers/userRoutes.js";


userRouter.post("/signUp",signup);
userRouter.post("/login",login);
userRouter.get("/searchUser",searchUser);

export default userRouter