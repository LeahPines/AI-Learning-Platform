import { Request, Response, NextFunction } from "express";
import { submitPromptService, getPromptByIdService } from "./prompt.service";

export const submitPrompt = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
    try {
        const userId = (req as any).user.id;
        const { categoryId, subCategoryId, prompt } = req.body;

        if (!categoryId || !subCategoryId || !prompt) {
            res.status(400).json({ message: "All fields are required." });
            return;
        }

        const promptEntry = await submitPromptService(userId, categoryId, subCategoryId, prompt);
        res.status(201).json(promptEntry);
        return;
    } catch (error) {
        next(error);
        return;
    }
};

export const getPromptById = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
    try {
        const userId = (req as any).user.id;
        const { promptId } = req.params;

        const prompt = await getPromptByIdService(promptId, userId);
        if (!prompt) {
            res.status(404).json({ message: "Prompt not found." });
            return;
        }
        res.json(prompt);
        return;
    } catch (error) {
        next(error);
        return;
    }
};