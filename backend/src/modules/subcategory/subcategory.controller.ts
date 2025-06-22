import { NextFunction, Request, Response } from "express";
import { createSubCategory, getSubCategoriesByCategoryId } from "./subcategory.service";

export const getSubCategoriesByCategory = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  const categoryId = req.params.categoryId;
  if (!categoryId) {
    res.status(400).json({ message: "Category ID is required" });
    return;
  }
    try {
    const categories = await getSubCategoriesByCategoryId(categoryId);
    res.json(categories);
  } catch (err) {
    next(err);
  }
};
export const addSubCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name } = req.body;
  const { categoryId } = req.params;

  if (!name || !categoryId) {
    res.status(400).json({ message: "Name and Category ID are required" });
    return;
  }

  try {
    const category = await createSubCategory(name, categoryId);
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};