import bcrypt from "bcrypt";
import adminRegisterModel from "../db/models/adminRegister.models.js";
import AllStudentsListModel from "../db/models/allStudent.models.js";
import AllCoursesModel from "../db/allCourse.models.js";
import AllRoutinesModel from "../db/models/AllRoutine.models.js";
import AllRoutines_13_Model from "../db/models/routine_13.models.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotEnv from "dotenv";

dotEnv.config();

export async function postApiSignup(req, res) {
  try {
    const { admin_name, admin_email, admin_number, admin_password } = req.body;

    // Input validation
    if (!admin_name || !admin_email || !admin_number || !admin_password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(admin_password, 10);

    // Create admin user
    const createdAdminUser = await adminRegisterModel.create({
      admin_name,
      admin_email,
      admin_number,
      admin_password: hashedPassword,
    });

    return res.status(201).json({
      message: "Admin user created successfully",
      data: createdAdminUser,
    });
  } catch (err) {
    console.error("Error creating admin user:", err.message);

    // Handle specific database errors if needed
    if (err.code === 11000) {
      // For example, duplicate key error
      return res.status(409).json({ error: "Email already exists" });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function postApiLogin(req, res) {
  try {
    const { admin_email, admin_password } = req.body;

    console.log('admin_email:',admin_email, "admin_password: ",admin_password)

    if (!admin_email || !admin_password) {
      console.log("invalid input")
      return res.status(400).json({ error: "Email and password are required" });
    }

    const admin = await adminRegisterModel.findOne({ admin_email: admin_email });
    if (!admin) {
      console.log(".......................User not found with email......................")
      return res.status(404).json({ error: "User not found" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(
      admin_password,
      admin.admin_password
    );
    if (!isPasswordValid) {
      console.log('.....................password doesnot match...................')
      return res.status(401).json({ error: "Invalid password" });
    }

    // Login successful
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: admin._id,
        name: admin.admin_name,
        email: admin.admin_email,
        number: admin.admin_number,
      },
    });
  } catch (err) {
    console.error("Error during login:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function postRoutine_Generate(req, res, next) {
  const { apiData, coursesData } = req.body;
  console.log("API Data: ===>", apiData);
  console.log("Courses Data: ===>", coursesData);

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
      You are a smart routine generation assistant.
      Using the data provided, create a weekly routine for batch ${
        apiData[0].batch
      }. 
      Ensure:
      - after time_3 there is a Tea break and after that from time_4 to continue class till time_6, so continue class from time_1 to time_3 then break then continue class from time_4 to time_6
      - Classes are well-distributed across the week.
      - No overlap for the same time slot.
      - if two class are same and alocated side by side labeled as "remains" to 2nd class because they are same course and alocate the course name to first one and     remains labeled as "remains" 
      - Unassigned slots are labeled as " ". 
      - Each Theory course get 3 class in a week, 1 Theory class == 1_time; example like 1 Theory class == time_1 or time_2 or time_3 ...... or time_6 
      - Each Sessional course get 1 class in a week, 1 Sessional class == 3_time; example like 1 Sessional class == time_1 + time_2 + time_3 or time_4 + time_5 + time_6
      - Sesssional class only contain either time_1 + time_2 + time_3 or time_4 + time_5 + time_6 in a day
      - Maximum 1 lab in a day
      - Allocate 4 labs in a week
      - Balance theory and sessional courses.
      - Output will be json data only

      Here are the inputs:
      
      1. Current Routine Data (to consider existing schedules):
      ${JSON.stringify(apiData, null, 2)}

      2. Courses Data (to include courses in the schedule):
      ${JSON.stringify(coursesData, null, 2)}

      Return the output in the following format: with Json data type
      [
        {
          "batch": <batch>,
          "day": "Sunday",
          "first": "<course_code or remains>",
          "second": "<course_code or remains>",
          "third": "<course_code or remains>",
          "fourth": "<course_code or remains>",
          "fifth": "<course_code or remains>",
          "sixth": "<course_code or remains>"
        },
        {
          "batch": <batch>,
          "day": "Monday",
          "first": "<course_code or remains>",
          "second": "<course_code or remains>",
          "third": "<course_code or remains>",
          "fourth": "<course_code or remains>",
          "fifth": "<course_code or remains>",
          "sixth": "<course_code or remains>"
        },
        {
          "batch": <batch>,
          "day": "Tuesday",
          "first": "<course_code or remains>",
          "second": "<course_code or remains>",
          "third": "<course_code or remains>",
          "fourth": "<course_code or remains>",
          "fifth": "<course_code or remains>",
          "sixth": "<course_code or remains>"
        },
        {
          "batch": <batch>,
          "day": "Wednesday",
          "first": "<course_code or remains>",
          "second": "<course_code or remains>",
          "third": "<course_code or remains>",
          "fourth": "<course_code or remains>",
          "fifth": "<course_code or remains>",
          "sixth": "<course_code or remains>"
        },
        {
          "batch": <batch>,
          "day": "Thursday",
          "first": "<course_code or remains>",
          "second": "<course_code or remains>",
          "third": "<course_code or remains>",
          "fourth": "<course_code or remains>",
          "fifth": "<course_code or remains>",
          "sixth": "<course_code or remains>"
        }, 
      ]
     A simple routine example like:-
 [
  {
    "batch": 13,
    "day": "Sunday",
    "first": "",
    "second": "CSE-4103",
    "third": "remains",
    "fourth": "MATH-4107",
    "fifth": "CSE-4000",
    "sixth": "remains"
  },
  {
    "batch": 13,
    "day": "Monday",
    "first": "CSE-4104",
    "second": "remains",
    "third": "remains",
    "fourth": "CSE-4101",
    "fifth": "HUM-4163",
    "sixth": "CSE-4103"
  },
  {
    "batch": 13,
    "day": "Tuesday",
    "first": "CSE-4101",
    "second": "remains",
    "third": "MATH-4107",
    "fourth": "CSE-4102",
    "fifth": "remains",
    "sixth": "remains"
  },
  {
    "batch": 13,
    "day": "Wednesday",
    "first": "CSE-4137",
    "second": "remians",
    "third": "remains",
    "fourth": "MATH-4107",
    "fifth": "",
    "sixth": "CSE-4000"
  },
  {
    "batch": 13,
    "day": "Thursday",
    "first": "CSE-4100",
    "second": "remains",
    "third": "remians",
    "fourth": "HUM-4163",
    "fifth": "remians",
    "sixth": ""
  }
]
    `;

  const result = await model.generateContent(prompt);

  // Log raw response to inspect formatting
  console.log("Raw response text:", result.response.text());

  let generatedRoutine;
  try {
    // Sanitize the response to remove Markdown formatting
    const rawText = result.response.text();
    const sanitizedText = rawText.replace(/```json|```/g, ""); // Remove backticks and "json"

    // Parse the sanitized response as JSON
    generatedRoutine = JSON.parse(sanitizedText);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return res.status(500).json({
      message: "Failed to parse generated routine",
      error: error.message,
    });
  }

  console.log("Generated Routine:", generatedRoutine);

  // Save the routine to the database
  try {
    const routineDocs = generatedRoutine.map((routine) => {
      return new AllRoutines_13_Model({
        batch: routine.batch,
        day: routine.day,
        first: routine.first,
        second: routine.second,
        third: routine.third,
        fourth: routine.fourth,
        fifth: routine.fifth,
        sixth: routine.sixth,
      });
    });

    await AllRoutines_13_Model.insertMany(routineDocs);

    return res.status(200).json({
      message: "Routine generated and saved successfully!",
      newRoutine: generatedRoutine,
    });
  } catch (error) {
    console.error("Error saving routine to database:", error);
    return res.status(500).json({
      message: "Failed to save routine to database",
      error: error.message,
    });
  }
}

export async function getStudentData(req, res) {
  try {
    let allStudentData = await AllStudentsListModel.find({
      batch: "13",
      department: "CSE",
    });
    console.log(allStudentData);
    return res.status(200).json(allStudentData);
  } catch (err) {
    console.log("Error route /api/getStudentData", err);
  }
}

export async function getAllCourses(req, res) {
  try {
    const { batch, dept } = req.query;
    let allStudentData = await AllCoursesModel.find({
      batch: batch,
      dept: dept,
    });
    // console.log("allStudents =====>", allStudentData);
    return res.status(200).json(allStudentData);
  } catch (err) {
    console.log("Error route /api/getallcourses", err);
  }
}

export async function getAllRoutines(req, res) {
  try {
    let allRoutineData_13 = await AllRoutines_13_Model.find({
      batch: "13",
    });
    console.log(allRoutineData_13);
    return res.status(200).json(allRoutineData_13);
  } catch (err) {
    console.log("Error route /api/getallroutines", err);
  }
}
