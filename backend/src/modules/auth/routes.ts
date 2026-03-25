import { Router } from "express";
import { RegisterController } from "./controllers/register.controller";

const authRoutes = Router();

const registerController = new RegisterController();

authRoutes.post("/register", (req, res) =>
  registerController.handle(req, res)
);

export { authRoutes };