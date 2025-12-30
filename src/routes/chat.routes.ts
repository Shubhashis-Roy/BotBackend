import { Router } from "express";
import { sendMessage, testDbConnection } from "../controllers/chat.controller";

const router = Router();

router.post("/message", sendMessage);

router.get("/test-db", testDbConnection);

export default router;
