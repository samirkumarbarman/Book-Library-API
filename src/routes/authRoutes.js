import express from "express";
import { registerUser, login, getUserProfile } from "../controllers/authController";
import { auth } from "../middleware/auth.js";

const authRouter = express.Router();


authRouter.post('/register', registerUser);
authRouter.post('/login', login);
authRouter.get('/profile',auth,  getUserProfile);

export default authRouter;