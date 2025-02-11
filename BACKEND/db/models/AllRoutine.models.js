import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
  batch: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  first: {
    type: String,
    required: true,
    default: "",
  },
  second: {
    type: String,
    required: true,
    default: "",
  },
  third: {
    type: String,
    required: true,
    default: "",
  },
  fourth: {
    type: String,
    required: true,
    default: "",
  },
  fifth: {
    type: String,
    required: true,
    default: "",
  },
  sixth: {
    type: String,
    required: true,
    default: "",
  },
});

const AllRoutines = mongoose.model("All_Routines", routineSchema);

export default AllRoutines;
