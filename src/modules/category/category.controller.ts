import { Request, Response, NextFunction } from "express";
import { getAllCategories, createCategory } from "./category.service";

export const getCategories = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

export const addCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: "Name is required" });
    return;
  }
  try {
    const category = await createCategory(name);
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};