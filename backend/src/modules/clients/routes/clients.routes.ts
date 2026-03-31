import { Router } from "express";
import { authMiddleware } from "@/middlewares/auth.middleware";

// Controllers
import { CreateClientController } from "../controllers/create-client.controller";
import { ListClientsController } from "../controllers/list-clients.controller";
import { GetClientController } from "../controllers/get-client.controller";
import { UpdateClientController } from "../controllers/update-client.controller";
import { DeleteClientController } from "../controllers/delete-client.controller";

const clientsRoutes = Router();

/*
|--------------------------------------------------------------------------
| Controller Instances
|--------------------------------------------------------------------------
*/

const createClientController = new CreateClientController();
const listClientsController = new ListClientsController();
const getClientController = new GetClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

clientsRoutes.use(authMiddleware); // 🔥 protege TODAS as rotas abaixo

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("/", listClientsController.handle);
clientsRoutes.get("/:id", getClientController.handle);
clientsRoutes.put("/:id", updateClientController.handle);
clientsRoutes.delete("/:id", deleteClientController.handle);

export { clientsRoutes };