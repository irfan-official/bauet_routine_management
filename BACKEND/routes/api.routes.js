import express from "express";
import {
  postApiLogin,
  postApiSignup,
  postRoutine_Generate,
  getStudentData,
  getAllCourses,
  getAllRoutines,
} from "../controllers/api.controller.js";

const Router = express.Router();

export default Router;

Router.post("/signup", postApiSignup);
Router.post("/login", postApiLogin);
Router.post("/generate_routine", postRoutine_Generate);

Router.get("/getStudentData", getStudentData);
Router.get("/getallcourses", getAllCourses);
Router.get("/getallroutines", getAllRoutines);

