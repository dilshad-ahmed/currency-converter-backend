import express from "express";
import cryptocurrencyRouter from "./routes/cryptocurrencyRoute.js";

export const app = express();

import cors from "cors";

app.use(express.json());
app.use(cors());

app.use("/api/v1", cryptocurrencyRouter);

//testing api
app.get("/test", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});
