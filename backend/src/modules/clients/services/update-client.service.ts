import { prisma } from "@/shared/database/prisma";
import { UpdateClientDTO } from "../dtos/update-client.dto";

export class UpdateClientService {
  async execute(userId: string, clientId: string, data: UpdateClientDTO) {

    const client = await prisma.client.findFirst({
      where: {
        id: clientId,
        userId,
      },
    });

    if (!client) {
      throw new Error("Client not found");
    }

    const updatedClient = await prisma.client.update({
      where: { id: clientId },
      data,
    });

    return updatedClient;
  }
}