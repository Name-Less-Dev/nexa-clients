import { Router, Request, Response } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/me", authMiddleware, (req: Request, res: Response) => {
  const user = (req as any).user;

  return res.json({
    message: "Authenticated",
    user,
  });
});

export { router as meRoutes };