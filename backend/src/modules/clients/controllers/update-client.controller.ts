import { Response } from "express";
import { AuthRequest } from "@/types/auth-request";
import { UpdateClientService } from "../services/update-client.service";

type GetClientParams = {
  id: string;
};

export class UpdateClientController {
  async handle(req: AuthRequest<GetClientParams>, res: Response) {
    const { id } = req.params;

    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const service = new UpdateClientService();

    const client = await service.execute(
      req.user.id,
      id,
      req.body
    );

    return res.json(client);
  }
}