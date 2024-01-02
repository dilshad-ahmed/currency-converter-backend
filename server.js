import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config();

//create server
app.listen(process.env.PORT, () => {
  console.log("server listening on port " + process.env.PORT);
});
