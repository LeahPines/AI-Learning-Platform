import { Router } from "express";
import { getCategories, addCategory } from "./category.controller";
import { authenticateJWT, authorizeRoles } from "../../core/middlewares/auth.middleware";

const router = Router();

router.get("/allCategories", getCategories);
router.post("/addCategory", authenticateJWT, authorizeRoles("ADMIN"), addCategory);

export default router;