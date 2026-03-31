import { prisma } from "@/shared/database/prisma";

export class GetClientService {
  async execute(clientId: string, userId: string) {

    const client = await prisma.client.findFirst({
      where: {
        id: clientId,
        userId: userId, // 🔥 ownership validation
      },
    });

    if (!client) {
      throw new Error("Client not found");
    }

    return client;
  }
}