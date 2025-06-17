import { Request, Response, NextFunction } from "express";
import { registerUser, loginUser } from "./auth.service";

export const register = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
  const { name, phone, password } = req.body;
  if (!name || !phone || !password) {
    res.status(400).json({ message: "Name, phone, and password are required" });
    return;
  }
  try {
    const token = await registerUser(name, phone, password);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
  const { phone, password } = req.body;
  if (!phone || !password) {
    res.status(400).json({ message: "Phone and password are required" });
    return;
  }
  try {
    const token = await loginUser(phone, password);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};