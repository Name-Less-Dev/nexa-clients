import express from "express";
import authRoutes from "./modules/auth/routes";
import { meRoutes } from "./routes/me.routes";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/api", meRoutes);

export { app };