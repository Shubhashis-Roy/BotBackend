import { Request, Response } from "express";
import { supabase } from "../config/supabase.client";

export const healthCheck = async (_req: Request, res: Response) => {
  try {
    const { error } = await supabase
      .from("conversations")
      .select("id")
      .limit(1);

    if (error) {
      return res.status(200).json({
        status: "degraded",
        server: "up",
        database: "disconnected",
      });
    }

    return res.status(200).json({
      status: "ok",
      server: "up",
      database: "connected",
    });
  } catch (err) {
    return res.status(200).json({
      status: "degraded",
      server: "up",
      database: "disconnected",
    });
  }
};
