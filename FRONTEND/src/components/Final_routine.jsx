import React from "react";
import Nav from "./Nav.jsx";
import { useState, useEffect } from "react";
import BatchStudentList from "../components/studentList/BatchStudentList.jsx";
import DepartmentWise from "./final_routine_components/DepartmentWise.jsx";
import TeacherWise from "./final_routine_components/TeacherWise.jsx";
import axios from "axios";

function Final_routine({ currentBatch, setCurrentBatch }) {
  let [clickDept, setClickDept] = useState(false);
  let [clickDept_13, setClickDept_13] = useState(false);
  let [clickTeach, setClickTeach] = useState(false);
  let [routine_13, setRoutine_13] = useState([]);

  useEffect(() => {
    axios
      .get("/api/getallroutines")
      .then((data) => {
        console.log("data ====> ", data.data);
        setRoutine_13(data.data);
      })
      .catch((err) => connsole.log("err ===> ", err));
  }, []);

  function css() {
    return " bg-[#7480A8] w-36 py-2 rounded-lg mt-1";
  }
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Nav currentBatch={currentBatch} setCurrentBatch={setCurrentBatch} />
      <div className="w-full flex-col min-h-[calc(100vh-7rem)] flex justify-start items-center gap-28 ">
        {currentBatch ? (
          <BatchStudentList />
        ) : (
          <div className=" w-full h-[calc(100%-7rem)] ">
            <div className="flex flex-col gap-8 justify-evenly w-full h-1/5 mt-2 b ">
              <h1 className="w-full text-center text-2xl font-semibold ">
                Final Routine Generated !
              </h1>
              <div className="w-full flex items-center justify-center gap-14">
                <button onClick={() => setClickDept((prev) => !prev)}>
                  <DepartmentWise
                    clickDept={clickDept}
                    setClickDept_13={setClickDept_13}
                  />
                </button>
                <button onClick={() => setClickTeach((prev) => !prev)}>
                  <TeacherWise clickTeach={clickTeach} />
                </button>
              </div>
            </div>
            {clickDept_13 ? (
              <div className="w-full  xl:h-[79.4vh]  2xl:h-[76vh]  text-black text-center flex flex-col items-center justify-center mb-10">
                <div className=" flex flex-col items-center justify-center w-full h-full gap-10 xl:mt-20 2xl:mt-1 2xl:mb-0 xl:scale-[.8]">
                  <h1 className="font-semibold text-4xl text-lime-600">
                    Schedule & Time for 13th Batch
                  </h1>
                  {/* Day Sunday Monday Thusday Wednesday Thursday Friday Saturday */}
                  <div className="px-4 ">
                    <table class=" border-lime-600 text-black">
                      <thead class="border border-lime-600">
                        <th class="border px-2 border-lime-600">Day</th>
                        <th class="border-r px-2 border-lime-600">
                          8.15AM -9.10AM
                        </th>
                        <th class="py-2 border-r  px-2 border-lime-600">
                          9.15AM - 10.10AM
                        </th>
                        <th class="border-r  px-2 py-5 border-lime-600">
                          10.15AM - 11.10AM
                        </th>
                        <th class="border-r  px-2 border-lime-600">
                          11.40AM - 12.35PM
                        </th>
                        <th class="border-r  px-2 border-lime-600">
                          12.40PM - 1.35PM
                        </th>
                        <th class="border-r  px-2 border-lime-600">
                          1.40PM - 2.35PM
                        </th>
                      </thead>
                      <tbody class="">
                        {routine_13.map((item, index) => (
                          <>
                            <td className="text-center h-14 py-6 border border-lime-600 px-5 font-semibold">
                              {item.day}
                            </td>
                            <td className="text-center h-14 py-6 border border-lime-600">
                              {item.first}
                            </td>
                            <td className="text-center h-14 py-6 border border-lime-600">
                              {item.second}
                            </td>
                            <td className="text-center h-14 py-6 border border-lime-600">
                              {item.third}
                            </td>
                            <td className="text-center h-14 py-6 border border-lime-600">
                              {item.fourth}
                            </td>
                            <td className="text-center h-14 py-6 border border-lime-600">
                              {item.fifth}
                            </td>
                            <td className="text-center h-14 py-6 border border-lime-600">
                              {item.sixth}
                            </td>
                            <tr></tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="w-full  xl:h-[60.4vh]  2xl:h-[76vh] flex flex-col justify-center items-center text-center gap-2">
                  <div className="text-2xl flex flex-col justify-center items-center gap-4 text-[#1E3428]">
                    <h1>Successfully generated !</h1>
                    <h1>Please select a criteria to see specific routine</h1>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Final_routine;
