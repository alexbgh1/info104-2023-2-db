import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.ATLAS_URI || "", {
    dbName: "INFO104-2023-2",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
