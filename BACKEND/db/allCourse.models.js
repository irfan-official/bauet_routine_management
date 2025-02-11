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
    type: String,
    required: true,
  },
  course_category: {
    type: String,
    required: true,
  },
});


const batchCoursesSchema = new mongoose.Schema({
  batch: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  course: {
    type: [courseSchema], 
    required: true,
  },
});


const AllCourses = mongoose.model("All_Courses", batchCoursesSchema);

export default AllCourses;
