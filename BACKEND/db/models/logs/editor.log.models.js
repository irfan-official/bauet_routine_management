import mongoose from "mongoose";

const editLogSchema = new mongoose.Schema(
  {
    editor_name: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    ip: { type: String, required: true, trim: true },
    status_code: { type: Number, required: true },
    path: { type: String, required: true },
    method: { type: String, required: true },
    user_agent: { type: String },
    response_time: { type: Number }, // Response time in ms
    error: { type: String, default: "" }, // Error details, if any
    editor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teachers",
    },
  },
  { timestamps: true }
);

const editLog = mongoose.model("editLog", editLogSchema);

export default editLog;
