import { prisma } from "@/shared/database/prisma";

export class ListClientsService {
  async execute(userId: string) {
    const clients = await prisma.client.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return clients;
  }
}