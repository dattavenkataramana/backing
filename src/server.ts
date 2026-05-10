import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.get("/", (req, res) => {
    res.send("10-05-22026");
  });

  app.listen(PORT, () => {
    console.log(`Server Running On ${PORT}`);
  });
};

startServer();
