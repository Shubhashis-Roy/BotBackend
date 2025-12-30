import { Router } from "express";
import chatRouter from "./chat.routes";
import healthRouter from "./health.route";

const router = Router();

// All the routes
router.use("/chat", chatRouter);

router.use("/health", healthRouter);

export default router;
