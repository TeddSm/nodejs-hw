import { Router } from "express"; 
import { celebrate } from "celebrate";
import { loginUserSchema, registerUserSchema } from "../validations/authValidation.js";
import { requestResetEmailSchema } from '../validations/authValidation.js';
import { requestResetEmail } from '../controllers/authController.js';
import { resetPasswordSchema } from '../validations/authValidation.js';
import { resetPassword } from '../controllers/authController.js';

import { loginUser, registerUser, refreshUserSession, logoutUser } from "../controllers/authController.js";

const router = Router(); 

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/refresh', refreshUserSession);
router.post('/auth/logout', logoutUser);
router.post('/auth/request-reset-email', celebrate(requestResetEmailSchema), requestResetEmail);
router.post('/auth/reset-password', celebrate(resetPasswordSchema), resetPassword);

export default router;