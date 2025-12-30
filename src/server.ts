import express from "express";
import routes from "./routes";

export const app = express();

// Middlewares
app.use(express.json());

app.use("/api", routes);
