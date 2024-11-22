import express from 'express';
import { registerController, loginController } from '../controllers/authController.js'
const authRouter = express.Router();

//rounting
//REGISTER || METHOD POST

authRouter.post('/register', registerController)

//LOGIN || POST

authRouter.post("/login", loginController);

export default authRouter;