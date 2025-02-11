import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    student_Name: {
      type: String,
      required: true,
      trim: true,
    },
    student_id: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    batch: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: String,
      required: true,
      trim: true,
    },
    semister: {
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
    admission_session: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Teachers = new mongoose.model("Teachers", teacherSchema);
