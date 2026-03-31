import { Router, Response } from "express";
import { AuthRequest } from "../types/auth-request";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/me", authMiddleware, (req: AuthRequest, res: Response) => {
  const user = (req as any).user;

  return res.json({
    message: "Authenticated",
    user,
  });
});

export { router as meRoutes };