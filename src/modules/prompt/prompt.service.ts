import prisma from "../../core/config/prisma";
import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY,});

export const generateAIResponse = async (prompt: string): Promise<string> => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 256,
  });
  return chatCompletion.choices[0].message?.content?.trim()|| "No response.";
};

export const submitPromptService = async (userId: string, categoryId: string, subCategoryId: string, promptText: string) => {
  const response = await generateAIResponse(promptText);

  return prisma.prompt.create({
    data: {
      prompt: promptText,
      response,
      userId,
      categoryId,
      subCategoryId,
    },
  });
};

export const getPromptByIdService = async (promptId: string, userId: string) => {
  return prisma.prompt.findFirst({
    where: { id: promptId, userId },
  });
};