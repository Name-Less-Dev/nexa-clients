import { Response } from "express";
import { AuthRequest } from "@/types/auth-request";
import { DeleteClientService } from "../services/delete-client.service";

type GetClientParams = {
  id: string;
};

export class DeleteClientController {
  async handle(req: AuthRequest<GetClientParams>, res: Response) {
    const { id } = req.params;

    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const service = new DeleteClientService();

    await service.execute(req.user.id, id);

    return res.status(204).send();
  }
}