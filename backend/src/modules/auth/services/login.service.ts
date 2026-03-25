import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../../shared/database/prisma";

export async function loginService(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { userId: user.id },
    "super_secret_key",
    { expiresIn: "1d" }
  );

  return { token };
}