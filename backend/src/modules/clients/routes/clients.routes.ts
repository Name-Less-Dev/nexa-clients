import { Router } from "express";
import { CreateClientController } from "../controllers/create-client.controller";
import { ListClientsController } from "../controllers/list-clients.controller";
import { authMiddleware } from "@/middlewares/auth.middleware";
import { GetClientController } from "@/modules/clients/controllers/get-client.controller";

const getClientController = new GetClientController();
const clientsRoutes = Router();

const createClientController = new CreateClientController();
const listClientsController = new ListClientsController();

clientsRoutes.post(
  "/",
  authMiddleware,
  createClientController.handle
);

clientsRoutes.get(
  "/",
  authMiddleware,
  listClientsController.handle
);

clientsRoutes.get(
  "/:id", 
  authMiddleware, 
  getClientController.handle
);


export { clientsRoutes };