import express from "express";
import { prisma } from "./shared/database/prisma";

export const app = express();

app.use(express.json());

app.get("/health", async (_, res) => {
  await prisma.user.findMany();

  res.json({ status: "ok", database: "connected" });
});