import { body } from "express-validator";

export const registerValidator = [
    body("name").isString().notEmpty().withMessage("Name is required"),
    body("phone").isString().notEmpty().withMessage("Phone is required").isLength({ min: 10, max: 10 }).withMessage("Phone must be exactly 10 digits").matches(/^\d{10}$/).withMessage("Phone must contain only digits"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

export const loginValidator = [
    body("phone").isString().notEmpty().withMessage("Phone is required").isLength({ min: 10, max: 10 }).withMessage("Phone must be exactly 10 digits").matches(/^\d{10}$/).withMessage("Phone must contain only digits"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];