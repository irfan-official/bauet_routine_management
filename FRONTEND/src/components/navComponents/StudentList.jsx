import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function StudentList({ click, setCurrentBatch }) {
  let [click_13, setClick_13] = useState(false);
  useEffect(() => {
    if (click_13) {
      axios
        .get("/api/getStudentData")
        .then((data) => {
          setCurrentBatch(data);
          console.log(data);
        })
        .catch((err) =>
          console.log("fetch data error `/api/getStudentData`", err)
        );
    }
  }, [click_13]);

  return (
    <div className=" flex flex-col gap-5 relative">
      <h1 className="px-4 py-3 bg-green-800 rounded-xl ">Student List</h1>
      {click ? (
        <div className="2xl:scale-100 xl:scale-[0.8] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 translate-x-[-8%] z-[100]">
          <button
            onClick={() => setCurrentBatch("12")}
            className="bg-slate-100 text-black py-2 px-4 rounded-lg border text-nowrap hover:bg-slate-300"
          >
            12th Batch
          </button>
          <button
            onClick={() => setClick_13((prev) => !prev)}
            className="bg-slate-100 text-black py-2 px-4 rounded-lg border text-nowrap hover:bg-slate-300"
          >
            13th Batch
          </button>
          <button
            onClick={() => setCurrentBatch("14")}
            className="bg-slate-100 text-black py-2 px-4 rounded-lg border text-nowrap hover:bg-slate-300"
          >
            14th Batch
          </button>
          <button className="bg-slate-100 text-black py-2 px-4 rounded-lg border text-nowrap hover:bg-slate-300">
            15th Batch
          </button>
          <button className="bg-slate-100 text-black py-2 px-4 rounded-lg border text-nowrap hover:bg-slate-300">
            16th Batch
          </button>
          <button className="bg-slate-100 text-black py-2 px-4 rounded-lg border text-nowrap hover:bg-slate-300">
            17th Batch
          </button>
          <button className="bg-slate-100 text-black py-2 px-4 rounded-lg border text-nowrap hover:bg-slate-300">
            18th Batch
          </button>
          <button className="bg-slate-100 text-black py-2 px-4 rounded-lg border text-nowrap hover:bg-slate-300">
            19th Batch
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default StudentList;
