import { Router } from "express";
import { getUserPromptHistory } from "./user.controller";
import { authenticateJWT } from "../../core/middlewares/auth.middleware";

const router = Router();

router.get("/history", authenticateJWT, getUserPromptHistory);

export default router;