import { Request, Response, NextFunction } from "express";
import { getAllUsersService, getUserPromptHistoryService, getUsersWithHistoryService } from "./admin.service";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserPromptHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId;
   
    const history = await getUserPromptHistoryService(userId);
    res.json(history);
  } catch (error) {
    next(error);
  }
};

export const getUsersWithHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usersWithHistory = await getUsersWithHistoryService();
    res.json(usersWithHistory);
  } catch (error) {
    next(error);
  }
};
