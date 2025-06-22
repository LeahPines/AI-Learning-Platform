import prisma from "../../core/config/prisma";

export const getUserPromptHistoryService = async (userId: string) => {
  return prisma.prompt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
};