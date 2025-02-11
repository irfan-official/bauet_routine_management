import React from "react";
import { useState, useEffect } from "react";

import StudentList from "../../apis/studentList/studentList.js";

function BatchStudentList({ current_batch }) {
  let [student_List, setstudent_List] = useState(StudentList);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-2 mb-5">
      <h1 className="text-center font-semibold text-3xl text-lime-800 my-4">
        13 Batch
      </h1>
      <div className="">
        <table class=" border-lime-600 text-black">
          <thead class="border border-lime-600">
            <th class="border px-4 border-lime-600">Serial</th>
            <th class="border-r px-4 border-lime-600">Student Id</th>
            <th class="py-2 border-r  px-4 border-lime-600">Student Name</th>
          </thead>
          <tbody class="">
            {student_List.map((item, index) => (
              <>
                <td className="text-center h-14 py-6 border border-lime-600 px-5 font-semibold">
                  {item.serial}
                </td>
                <td className="text-center h-14 py-6 border border-lime-600 px-7">
                  {item.student_ID}
                </td>
                <td className="text-center h-14 py-6 border border-lime-600 px-5">
                  {item.student_name}
                </td>

                <tr></tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BatchStudentList;
