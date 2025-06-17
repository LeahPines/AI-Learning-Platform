import prisma from "../../core/config/prisma";

export const getSubCategoriesByCategoryId = async (categoryId: string) => {
  return prisma.subCategory.findMany({ where: { categoryId } });
};

export const createSubCategory = async (name: string, categoryId: string) => {
  return prisma.subCategory.create({ data: { name, categoryId } });
}; 