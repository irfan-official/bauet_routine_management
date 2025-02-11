import React from "react";
import { useState } from "react";
import Schedule from "./Schedule";
import teacher_schedule_selection from "../apis/teacher_schedule_selection.js"

function ScheduleMain({ currentBatch }) {
  let [clickAT, setClickAT] = useState(false);
  let [clickPF, setClickPF] = useState(false);
  let [clickAP, setClickAP] = useState(false);
  let [clickLC, setClickLC] = useState(false);
  let [clickAINS, setClickAI] = useState(false);
  let [tabs] = useState([
    1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4,
    5, 6, 7, 1, 2, 3, 4, 5, 6, 7,
  ]);
  return (
    <div className="w-full h-[calc(100vh-7rem)]  flex bg-white overflow-hidden items-center justify-center">

      {currentBatch ? "Loading..." : <><div className="2xl:w-5/12 xl:w-4/12 h-full  flex flex-col gap-6 items-center justify-center">
        <button
          onClick={() => setClickAT((prev) => !prev)}
          className={` ${clickAT ? "bg-[#3d4668]" : "bg-[#7480A8]"} 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md  hover:bg-[#3d4668] font-semibold text-lg focus: `}
        >
          Adjunt Teacher
        </button>
        <button
          onClick={() => setClickPF((prev) => !prev)}
          className="bg-[#7480A8] 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] font-semibold text-lg"
        >
          Professor
        </button>
        <button
          onClick={() => setClickAP((prev) => !prev)}
          className="bg-[#7480A8] 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] font-semibold text-lg"
        >
          Associate Professor
        </button>
        <button
          onClick={() => setClickLC((prev) => !prev)}
          className="bg-[#7480A8] 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] font-semibold text-lg"
        >
          Lecturer
        </button>
        <button
          onClick={() => setClickAI((prev) => !prev)}
          className="bg-[#7480A8] 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] font-semibold text-lg"
        >
          Adjunt Instructor
        </button>
      </div>
        <div className="2xl:w-7/12 xl:w-8/12  h-full flex items-center justify-center relative">
          <div className="relative w-full h-full flex items-center justify-center">
            {clickAT || clickPF || clickAP || clickLC || clickAINS ? (
              <div className=" flex flex-col items-center justify-center 2xl:scale-[1] xl:scale-[0.7] w-full h-full gap-10">
                <h1 className="font-semibold text-4xl text-lime-600">
                  Schedule & Time
                </h1>
                {/* Day Sunday Monday Thusday Wednesday Thursday Friday Saturday */}
                <div className="px-4 2xl:scale-[1] xl:scale-[1.1]">
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
                      {tabs.map((item, index) => (
                        <>
                          <td className="text-center h-14 py-6 border border-lime-600">
                            {item === 1 ? (
                              <td className="px-5 font-semibold">Wednesday</td>
                            ) : (
                              <input
                                className="scale-[1.7]"
                                type="checkbox"
                                name=""
                                id=""
                              />
                            )}
                          </td>
                          {item === 7 ? <tr></tr> : ""}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button className="text-white w-3/12 py-3 font-semibold rounded-lg bg-[#024522]">
                  GENERATE
                </button>
              </div>
            ) : (
              <img className="scale-[0.5]" src="bauetlogo.png " alt="" />
            )}
          </div>
        </div></>}
    </div>
  );
}

export default ScheduleMain;
