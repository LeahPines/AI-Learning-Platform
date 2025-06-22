import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "No token provided" });
        return;
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, JWT_SECRET as string, (err, decoded: any) => {
        if (err) {
            res.status(403).json({ message: "Invalid token" });
            return;
        }
        (req as any).user = decoded;
        next();
    });
};

export const authorizeRoles = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const userRole = (req as any).user?.role;
        if (!userRole || !roles.includes(userRole)) {
            res.status(403).json({ message: "Access denied" });
            return;
        }
        next();
    };
};