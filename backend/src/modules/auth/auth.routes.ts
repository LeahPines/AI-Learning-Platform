import { Router } from "express";
import { register, login } from "./auth.controller";
import { loginValidator, registerValidator } from "../../core/validators/validator.auth";
import { validateRequest } from "../../core/middlewares/validation.middleware";

const router = Router();

router.post("/register", registerValidator, validateRequest, register);
router.post("/login", loginValidator, validateRequest, login);

export default router;