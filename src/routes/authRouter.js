import { celebrate } from "celebrate";
import { loginUserSchema, registerUserSchema } from "../validations/authValidation.js"; 
import router from "./notesRouter.js";
import { loginUser, registerUser, refreshUserSession, logoutUser } from "../controllers/authController.js";

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/refresh', refreshUserSession);
router.post('/auth/logout', logoutUser);

export default router;