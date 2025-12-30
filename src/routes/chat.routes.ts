import { Router } from "express";
import { sendMessage } from "../controllers";

const chatRouter = Router();

chatRouter.post("/message", sendMessage);

export default chatRouter;
