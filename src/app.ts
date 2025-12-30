import express from "express";
import routes from "./routes";

export const app = express();

// Middlewares
app.use(express.json({ limit: "10kb" }));

app.use("/api", routes);

app.use((err: any, _req: any, res: any, _next: any) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({
      error: "Invalid JSON payload",
    });
  }

  return res.status(500).json({
    error: "Internal server error",
  });
});
