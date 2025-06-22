import { Router } from "express";
import { addSubCategory, getSubCategoriesByCategory } from "./subcategory.controller";
import { authenticateJWT, authorizeRoles } from "../../core/middlewares/auth.middleware";

const router = Router();

router.get("/categories/:categoryId/subcategories", getSubCategoriesByCategory);
router.post("/categories/:categoryId/subcategories", authenticateJWT, authorizeRoles("ADMIN"), addSubCategory);

export default router;
