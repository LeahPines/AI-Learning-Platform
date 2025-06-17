import prisma from "../../core/config/prisma";

export const getAllUsersService = async () => {
return prisma.user.findMany({
    select: {
        id: true,
        name: true,
        phone: true,
        role: true,
     },
});
};

export const getUserPromptHistoryService = async (userId: string) => {
  return prisma.prompt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
};

export const getUsersWithHistoryService = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      phone: true,
      role: true,
      prompts: {
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          prompt: true,
          response: true,
          createdAt: true,
        },
      },
    },
  });
};
