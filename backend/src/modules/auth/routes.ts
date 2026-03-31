import { Router } from "express";
import { register, login } from "./auth.controller";
import { clientsRoutes } from "@/modules/clients/routes/clients.routes";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.use("/clients", clientsRoutes);

export default router;