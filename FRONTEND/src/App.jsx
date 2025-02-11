import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import SchedulePage from "./components/SchedulePage";
import Test_Routine from "./components/Test_Routine";
import Final_routine from "./components/Final_routine";
import { useState } from "react";
import Temp from "./components/temp/Temp.jsx";
import Routine_13 from "./components/temp/Temp_13.jsx";
import Home from "./components/Home.jsx";

function App() {
  let [currentBatch, setCurrentBatch] = useState("");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />

      <Route path="/test" element={<Test_Routine />} />
      <Route
        path="/show_routine"
        element={
          <Final_routine
            currentBatch={currentBatch}
            setCurrentBatch={setCurrentBatch}
          />
        }
      />
      <Route path="/generate" element={<Temp />} />
      <Route path="/generate/routine_cse_13" element={<Routine_13 />} />
    </Routes>
  );
}

export default App;
