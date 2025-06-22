import prisma from "../../core/config/prisma";

export const createCategory = async (name: string) => {
  return prisma.category.create({ data: { name } });
};

export const getAllCategories = async () => {
  return prisma.category.findMany();
};