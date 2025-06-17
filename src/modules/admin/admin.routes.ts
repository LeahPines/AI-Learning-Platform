import { Router } from "express";
import { getAllUsers, getUserPromptHistory, getUsersWithHistory } from "./admin.controller";
import { authenticateJWT, authorizeRoles } from "../../core/middlewares/auth.middleware";

const router = Router();

router.get("/users", authenticateJWT, authorizeRoles("ADMIN"), getAllUsers);
router.get("/users/:userId/history", authenticateJWT, authorizeRoles("ADMIN"), getUserPromptHistory);
router.get("/users-with-history", authenticateJWT, authorizeRoles("ADMIN"), getUsersWithHistory);

export default router;
