import { Response } from "express";
import { AuthRequest } from "@/types/auth-request";
import { CreateClientService } from "../services/create-client.service";

export class CreateClientController {
  async handle(req: AuthRequest, res: Response) {
    const { name, email, phone, company } = req.body;

    const userId = req.user!.id;

    const service = new CreateClientService();

    const client = await service.execute(
      { name, email, phone, company },
      userId
    );

    return res.status(201).json(client);
  }
}