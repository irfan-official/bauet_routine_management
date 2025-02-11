import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    ip: { type: String, required: true },
    status_code: { type: Number, required: true },
    path: { type: String, required: true },
    method: { type: String, required: true },
    user_agent: { type: String },
    response_time: { type: Number }, // Response time in ms
    error: { type: String }, // Error details, if any
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);

export default Log;
