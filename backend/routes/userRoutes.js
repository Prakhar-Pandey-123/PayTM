import express from "express"

const userRouter=express.Router();
import { signup,login } from "../controllers/auth.js";
import { searchUser,me } from "../controllers/userRoutes.js";
import check from "../middlewares/check.js";
// import me from "../controllers/userRoutes.js"

userRouter.post("/signUp",signup);
userRouter.post("/login",login);
userRouter.get("/searchUser",check,searchUser);
userRouter.post("/me",check,me);

export default userRouter