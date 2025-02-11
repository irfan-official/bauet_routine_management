import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  course_type: {
    type: String,
    required: true,
  },
  course_name: {
    type: String,
    required: true,
  },
  course_code: {
    type: String,
    required: true,
  },
  course_credit: {
    type: Number,
    required: true,
  },
  course_category: {
    type: String,
    required: true,
  },
});

const batchSchema = new mongoose.Schema({
  batch: {
    type: Number,
    required: true,
  },
  course: [courseSchema], // Embedding the course schema as an array
});

const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch;
