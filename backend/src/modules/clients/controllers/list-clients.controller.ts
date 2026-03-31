import { Response } from "express";
import { ListClientsService } from "../services/list-clients.service";
import { AuthRequest } from "@/types/auth-request";

export class ListClientsController {
  async handle(req: AuthRequest, res: Response) {

    if (!req.user) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    const userId = req.user.id;

    const service = new ListClientsService();

    const clients = await service.execute(userId);

    return res.json(clients);
  }
}