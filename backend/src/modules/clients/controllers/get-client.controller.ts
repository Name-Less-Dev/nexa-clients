import { Response } from "express";
import { AuthRequest } from "@/types/auth-request";
import { GetClientService } from "../services/get-client.service";

type GetClientParams = {
  id: string;
};

export class GetClientController {
  async handle(req: AuthRequest<GetClientParams>, res: Response) {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { id } = req.params;

    const service = new GetClientService();

    const client = await service.execute(id, req.user.id);

    return res.json(client);
  }
}