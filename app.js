import express from "express";
import cryptocurrencyRouter from "./routes/cryptocurrencyRoute.js";

export const app = express();

import cors from "cors";

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);

app.use("/api/v1", cryptocurrencyRouter);

//testing api
app.get("/test", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});
