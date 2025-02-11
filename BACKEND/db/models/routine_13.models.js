import mongoose from "mongoose";

const routineSchema_13 = new mongoose.Schema({
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

const AllRoutines_13 = mongoose.model("All_Routines_13", routineSchema_13);

export default AllRoutines_13;
