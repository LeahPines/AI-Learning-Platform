import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";

export const generateJWT = (user: { id: string; phone: string; role: string }) => {
  return jwt.sign(
    {
      id: user.id,
      phone: user.phone,
      role: user.role,
    },
    JWT_SECRET as string,
    { expiresIn: "3h" }
  );
};

export const verifyJWT = (token: string) =>{
  jwt.verify(token, JWT_SECRET as string);
  return jwt.decode(token);}