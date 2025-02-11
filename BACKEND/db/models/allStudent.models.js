import mongoose from "mongoose";

// Define the schema for a student
const studentSchema = new mongoose.Schema({
  batch: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  serial: {
    type: String,
    required: true,
  },
  student_ID: {
    type: String,
    required: true,
    unique: true, // Ensures each student ID is unique
  },
  student_name: {
    type: String,
    required: true,
  },
});

// Create the model for the All_Students_List collection
const AllStudentsList = mongoose.model("All_Students_List", studentSchema);

export default AllStudentsList;
