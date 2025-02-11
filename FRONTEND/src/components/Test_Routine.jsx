import React from "react";
import { useState } from "react";
import Schedule from "./Schedule";
import Nav from "./Nav";
import routine from "../apis/routine_13.js";
function Test_Routine() {
  let [clickAT, setClickAT] = useState(false);
  let [clickPF, setClickPF] = useState(false);
  let [clickAP, setClickAP] = useState(false);
  let [clickLC, setClickLC] = useState(false);
  let [clickAINS, setClickAI] = useState(false);
  let [tabs] = useState(routine);
  return (
    <div className="w-full h-[calc(100vh-7rem)]  flex bg-white overflow-hidden">
      <div className="w-5/12 h-full  flex flex-col gap-6 items-center justify-center">
        <button
          onClick={() => setClickAT((prev) => !prev)}
          className="bg-[#7480A8] w-72 rounded-md py-6 hover:bg-[#3d4668] font-semibold text-lg"
        >
          Adjunt Teacher
        </button>
        <button
          onClick={() => setClickPF((prev) => !prev)}
          className="bg-[#7480A8] w-72 rounded-md py-6 hover:bg-[#3d4668] font-semibold text-lg"
        >
          Professor
        </button>
        <button
          onClick={() => setClickAP((prev) => !prev)}
          className="bg-[#7480A8] w-72 rounded-md py-6 hover:bg-[#3d4668] font-semibold text-lg"
        >
          Associate Professor
        </button>
        <button
          onClick={() => setClickLC((prev) => !prev)}
          className="bg-[#7480A8] w-72 rounded-md py-6 hover:bg-[#3d4668] font-semibold text-lg"
        >
          Lecturer
        </button>
        <button
          onClick={() => setClickAI((prev) => !prev)}
          className="bg-[#7480A8] w-72 rounded-md py-6 hover:bg-[#3d4668] font-semibold text-lg"
        >
          Adjunt Instructor
        </button>
      </div>
      <div className="w-7/12  flex items-center justify-center relative">
        <div className="relative w-full h-full">
          {clickAT || clickPF || clickAP || clickLC || clickAINS ? (
            <div className=" flex flex-col items-center justify-center w-full h-full gap-10">
              <h1 className="font-semibold text-4xl text-lime-600">
                Schedule & Time
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
                    {tabs.map((item, index) => (
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
              <button className="text-white w-3/12 py-3 font-semibold rounded-lg bg-[#024522]">
                GENERATE
              </button>
            </div>
          ) : (
            <img className="" src="bauetlogo.png " alt="" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Test_Routine;
