import { prisma } from "@/shared/database/prisma";

export class DeleteClientService {
  async execute(userId: string, clientId: string) {

    const client = await prisma.client.findFirst({
      where: {
        id: clientId,
        userId,
      },
    });

    if (!client) {
      throw new Error("Client not found");
    }

    await prisma.client.delete({
      where: { id: clientId },
    });
  }
}