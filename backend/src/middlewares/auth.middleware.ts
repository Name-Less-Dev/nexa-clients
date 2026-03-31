import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/auth-request";
import { verifyToken } from "../utils/jwt";
import { prisma } from "../shared/database/prisma";

export async function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token) as { userId: string };

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user; // ✅ agora funciona

    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}