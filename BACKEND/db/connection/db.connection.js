import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export default async function () {
  mongoose
    .connect(process.env.DB)
    .then(() => console.log("mongodb connection successfull"))
    .catch((err) => console.log("mongodb connectionn failed"));
}
