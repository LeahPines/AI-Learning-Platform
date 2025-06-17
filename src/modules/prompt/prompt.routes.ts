import { Router } from "express";
import { submitPrompt, getPromptById } from "./prompt.controller";
import { authenticateJWT } from "../../core/middlewares/auth.middleware";

const router = Router();

// Submit a prompt (POST /prompt)
router.post("/", authenticateJWT, submitPrompt);

// Get a specific prompt by ID (GET /prompt/:promptId)
router.get("/:promptId", authenticateJWT, getPromptById);

export default router;