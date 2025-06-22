import { Router } from "express";
import { submitPrompt, getPromptById } from "./prompt.controller";
import { authenticateJWT } from "../../core/middlewares/auth.middleware";

const router = Router();

router.post("/", authenticateJWT, submitPrompt);
router.get("/:promptId", authenticateJWT, getPromptById);

export default router;