import { prisma } from "../../../shared/database/prisma";
import bcrypt from "bcrypt";
import { RegisterDTO } from "../schemas/register.schema";

export class RegisterService {
  async execute(data: RegisterDTO) {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}