import React from "react";

function Course_Credit({ click }) {
  return (
    <div className=" flex flex-col gap-5 relative">
      <h1 className="px-4 py-3 bg-green-800 rounded-xl ">Course&Credit</h1>
      {click ? (
        <div className="2xl:scale-100 xl:scale-[0.8] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-11 translate-x-[-5%]">
          <button className="bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
            Total Course List
          </button>
          <button className="bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
            Total Course List
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Course_Credit;
