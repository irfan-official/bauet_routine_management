import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    teacher_Name: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    employment_type: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Teachers = new mongoose.model("Teachers", teacherSchema);
