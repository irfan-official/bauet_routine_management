import React, { useState } from "react";

function DepartmentWise({ clickDept, setClickDept_13 }) {
  const [departments] = useState([
    "CSE",
    "EEE",
    "ME",
    "ICE",
    "BBA",
    "LLB",
    "ELL",
  ]);
  const [batch] = useState(["12", "13", "14", "15", "16", "17", "18", "19"]);
  const [activeDepartment, setActiveDepartment] = useState(null); // Tracks the active department index

  const toggleClick = (index) => {
    setActiveDepartment((prev) => (prev === index ? null : index)); // Toggle active department
  };

  return (
    <div className="relative">
      <div className="bg-[#7480A8] w-36 py-2 rounded-lg mt-1">
        Department Wise
      </div>
      {clickDept && (
        <div className="bg-[#CCCCCC] w-40 rounded-lg absolute top-[20%] translate-x-[-5%] px-3 py-2 scale-[0.8] flex flex-col gap-2 z-50">
          {departments.map((item, index) => (
            <div className="relative" key={index}>
              <button
                onClick={() => {
                  toggleClick(index);
                }}
                className="w-full"
              >
                <div
                  className={`px-1 py-2 text-wrap rounded-lg border-2 ${
                    activeDepartment === index
                      ? "bg-[#AEAEAE]"
                      : "bg-white hover:bg-[#AEAEAE]"
                  }`}
                >
                  {item} Department
                </div>
              </button>
              {activeDepartment === index && (
                <div className="mt-2 flex flex-col gap-2 bg-[#CCCCCC] rounded-lg p-2 absolute top-0 right-[-85%]">
                  {batch.map((batchItem, batchIndex) => (
                    <div
                      onClick={() => setClickDept_13((prev) => !prev)}
                      key={batchIndex}
                      className="bg-white px-7 py-2 text-wrap rounded-lg hover:bg-[#AEAEAE] border-2"
                    >
                      {batchItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DepartmentWise;
