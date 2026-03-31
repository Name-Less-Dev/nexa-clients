import { Router } from "express";
import { CreateClientController } from "../controllers/create-client.controller";
import { authMiddleware } from "@/middlewares/auth.middleware";

const clientsRoutes = Router();
const createClientController = new CreateClientController();

clientsRoutes.post(
  "/",
  authMiddleware,
  createClientController.handle
);

export { clientsRoutes };