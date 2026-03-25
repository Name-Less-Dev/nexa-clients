import express from "express";
import { authRoutes } from "./modules/auth/routes";

export const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});