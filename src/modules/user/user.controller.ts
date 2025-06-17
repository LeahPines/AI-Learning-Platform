import { Request, Response, NextFunction } from "express";
import { getUserPromptHistoryService } from "./user.service";

export const getUserPromptHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id; 
    const history = await getUserPromptHistoryService(userId);
    res.json({ history });
  } catch (error) {
    next(error);
  }
};