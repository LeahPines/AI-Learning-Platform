import prisma from "../../core/config/prisma";
import { Role } from '@prisma/client';
import bcrypt from "bcryptjs";
import { generateJWT } from "../../core/utils/jwt";

export const registerUser = async (name: string, phone: string, password: string) => {
  const existingUser = await prisma.user.findUnique({ where: { phone } });
  if (existingUser)
    throw { status: 409, message: "User already exists" };

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, phone, password: hashedPassword, role: Role.USER },
  });

  const token = generateJWT({ id: user.id, phone: user.phone, role: user.role });
  const { password: _pw, ...userWithoutPassword } = user;

  return {
    token,
    user: userWithoutPassword,
  };
};

export const loginUser = async (phone: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { phone } });
  if (!user)
    throw { status: 401, message: "Invalid phone or password" };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    throw { status: 401, message: "Invalid phone or password" };

  const token = generateJWT({ id: user.id, phone: user.phone, role: user.role });
  const { password: _pw, ...userWithoutPassword } = user;

  return {
    token,
    user: userWithoutPassword,
  };
};