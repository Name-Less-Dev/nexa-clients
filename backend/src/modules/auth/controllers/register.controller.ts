import { Request, Response } from "express";
import { registerSchema } from "../schemas/register.schema";
import { RegisterService } from "../services/register.service";

export class RegisterController {
  async handle(req: Request, res: Response) {
    const data = registerSchema.parse(req.body);

    const service = new RegisterService();

    const result = await service.execute(data);

    return res.status(201).json(result);
  }
}