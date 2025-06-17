import { Router } from "express";
import { getCategories, addCategory } from "./category.controller";
import { authenticateJWT, authorizeRoles } from "../../core/middlewares/auth.middleware";

const router = Router();

router.get("/", authenticateJWT, getCategories);
router.post("/", authenticateJWT, authorizeRoles("ADMIN"), addCategory);

export default router;