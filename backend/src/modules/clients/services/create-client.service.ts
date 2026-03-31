import { prisma } from "@/shared/database/prisma";
import { CreateClientDTO } from "../dtos/create-client.dto";

export class CreateClientService {
  async execute(data: CreateClientDTO, userId: string) {
    const client = await prisma.client.create({
      data: {
        ...data,
        userId,
      },
    });

    return client;
  }
}