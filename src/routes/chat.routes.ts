import { Router } from "express";
import { sendMessage, getChatHistory } from "../controllers";

const chatRouter = Router();

chatRouter.post("/message", sendMessage);

chatRouter.get("/history/:conversationId", getChatHistory);

export default chatRouter;
