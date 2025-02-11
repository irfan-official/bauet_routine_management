import React from "react";
import { useState } from "react";
import Temp_13 from "./Temp_13";
import { NavLink } from "react-router-dom";
function Tempmain() {
  let [clickDept, setClickDept] = useState({ clickStatus: false });
  let [clickDOverall, setClickDOverall] = useState({ clickStatus: false });
  let [clickDCSE, setClickDCSE] = useState({ clickStatus: false });
  let [clickDEEE, setClickDEEE] = useState({ clickStatus: false });
  let [clickDME, setClickDME] = useState({ clickStatus: false });
  let [clickDICE, setClickDICE] = useState({ clickStatus: false });
  let [clickDBBA, setClickDBBA] = useState({ clickStatus: false });
  let [clickDLLB, setClickDLLB] = useState({ clickStatus: false });
  let [clickDELL, setClickDELL] = useState({ clickStatus: false });

  let [clickBatch, setClickBatch] = useState({ clickStatus: false });
  let [clickBOverall, setClickBOverall] = useState({ clickStatus: false });
  let [clickB12, setClickB12] = useState({ clickStatus: false });
  let [clickB13, setClickB13] = useState({ clickStatus: false });
  let [clickB14, setClickB14] = useState({ clickStatus: false });
  let [clickB15, setClickB15] = useState({ clickStatus: false });
  let [clickB16, setClickB16] = useState({ clickStatus: false });
  let [clickB17, setClickB17] = useState({ clickStatus: false });
  let [clickB18, setClickB18] = useState({ clickStatus: false });
  let [clickB19, setClickB19] = useState({ clickStatus: false });

  function setClick_1(catchFunction_1) {
    let fun_arr_1 = [
      setClickDOverall,
      setClickDCSE,
      setClickDEEE,
      setClickDME,
      setClickDICE,
      setClickDBBA,
      setClickDLLB,
      setClickDELL,
    ];
    fun_arr_1.forEach((itemFunction, index) => {
      itemFunction === catchFunction_1
        ? itemFunction((prev) => ({
            ...prev,
            clickStatus: !prev.clickStatus,
          }))
        : itemFunction((prev) =>
            prev.clickStatus
              ? { ...prev, clickStatus: !prev.clickStatus }
              : { ...prev }
          );
    });
  }

  function setClick_2(catchFunction_2) {
    let fun_arr_2 = [
      setClickBOverall,
      setClickB12,
      setClickB13,
      setClickB14,
      setClickB15,
      setClickB16,
      setClickB17,
      setClickB18,
      setClickB19,
    ];
    fun_arr_2.forEach((itemFunction, index) => {
      itemFunction === catchFunction_2
        ? itemFunction((prev) => ({
            ...prev,
            clickStatus: !prev.clickStatus,
          }))
        : itemFunction((prev) =>
            prev.clickStatus
              ? { ...prev, clickStatus: !prev.clickStatus }
              : { ...prev }
          );
    });
  }
  function selectBatch() {
    if (clickBOverall.clickStatus) {
      return {
        batch: "Overall",
        status: true,
      };
    } else if (clickB12.clickStatus) {
      return {
        batch: "12",
        status: true,
      };
    } else if (clickB13.clickStatus) {
      return {
        batch: "13",
        status: true,
      };
    } else if (clickB14.clickStatus) {
      return {
        batch: "14",
        status: true,
      };
    } else if (clickB15.clickStatus) {
      return {
        batch: "15",
        status: true,
      };
    } else if (clickB16.clickStatus) {
      return {
        batch: "16",
        status: true,
      };
    } else if (clickB17.clickStatus) {
      return {
        batch: "17",
        status: true,
      };
    } else if (clickB18.clickStatus) {
      return {
        batch: "18",
        status: true,
      };
    } else if (clickB19.clickStatus) {
      return {
        batch: "19",
        status: true,
      };
    } else {
      return {
        batch: "",
        status: false,
      };
    }
  }
  function result() {
    if (clickDOverall.clickStatus && selectBatch().status) {
      return {
        status: true,
        route: `overall_${selectBatch().batch}`,
      };
    } else if (clickDCSE.clickStatus && selectBatch().status) {
      return {
        status: true,
        route: `cse_${selectBatch().batch}`,
      };
    } else if (clickDEEE.clickStatus && selectBatch().status) {
      return {
        status: true,
        route: `eee_${selectBatch().batch}`,
      };
    } else if (clickDME.clickStatus && selectBatch().status) {
      return {
        status: true,
        route: `me_${selectBatch().batch}`,
      };
    } else if (clickDICE.clickStatus && selectBatch().status) {
      return {
        status: true,
        route: `ice_${selectBatch().batch}`,
      };
    } else if (clickDBBA.clickStatus && selectBatch().status) {
      return {
        status: true,
        route: `bba_${selectBatch().batch}`,
      };
    } else if (clickDLLB.clickStatus && selectBatch().status) {
      return {
        status: true,
        route: `llb_${selectBatch().batch}`,
      };
    } else if (clickDELL.clickStatus && selectBatch().status) {
      return {
        status: true,
        route: `ell_${selectBatch().batch}`,
      };
    } else {
      return {
        status: false,
        route: "/404",
      };
    }
  }
  return (
    <>
      <div className="w-full  xl:h-[calc(100vh-5rem)] 2xl:h-[calc(100vh-7rem)] flex justify-start items-center text-white flex-col">
        <div className="flex flex-col items-center justify-center gap-5  w-full my-5">
          <h1 className="text-4xl text-lime-700 ">
            Welcome to the Routine Management
          </h1>
          <h3 className="text-xl">
            Please select the option to generate routine
          </h3>
        </div>

        <div className="flex items-center justify-center w-full gap-28 text-black font-semibold ">
          <button
            onClick={() => {
              setClickDept((prev) => ({
                ...prev,
                clickStatus: !prev.clickStatus,
              }));
            }}
            className={`${
              clickDept.clickStatus
                ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                : "bg-[#7480A8]"
            } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
          >
            <h2>Department</h2>
            {clickDept.clickStatus ? (
              <div className="2xl:scale-[1] xl:w-64 2xl:w-52 xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[-12%] translate-y-[-7.9%] 2xl:translate-x-[20%] 2xl:translate-y-[8%]">
                <button
                  onClick={() => {
                    setClick_1(setClickDOverall);
                    setClickDept((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                  }}
                  className={`w-full bg-slate-100 ${
                    clickDOverall.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  Overall
                </button>
                <button
                  onClick={() => {
                    setClick_1(setClickDCSE);
                    setClickDept((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                  }}
                  className={`w-full bg-slate-100 ${
                    clickDCSE.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  CSE Department
                </button>
                <button
                  onClick={() => {
                    setClick_1(setClickDEEE);
                    setClickDept((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                  }}
                  className={`w-full bg-slate-100 ${
                    clickDEEE.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  EEE Department
                </button>
                <button
                  onClick={() => {
                    setClick_1(setClickDME);
                    setClickDept((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                  }}
                  className={`w-full bg-slate-100 ${
                    clickDME.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  ME Department
                </button>
                <button
                  onClick={() => {
                    setClick_1(setClickDICE);
                    setClickDept((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                  }}
                  className={`w-full bg-slate-100 ${
                    clickDICE.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  ICE Department
                </button>
                <button
                  onClick={() => {
                    setClick_1(setClickDBBA);
                    setClickDept((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                  }}
                  className={`w-full bg-slate-100 ${
                    clickDBBA.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  BBA Department
                </button>
                <button
                  onClick={() => {
                    setClick_1(setClickDLLB);
                    setClickDept((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                  }}
                  className={`w-full bg-slate-100 ${
                    clickDLLB.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  LLB Department
                </button>
                <button
                  onClick={() => {
                    setClick_1(setClickDELL);
                    setClickDept((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                  }}
                  className={`w-full bg-slate-100 ${
                    clickDELL.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  ELL Department
                </button>
              </div>
            ) : (
              ""
            )}
          </button>

          <button
            onClick={() => {
              setClickBatch((prev) => ({
                ...prev,
                clickStatus: !prev.clickStatus,
              }));
            }}
            className={`${
              clickBatch.clickStatus
                ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                : "bg-[#7480A8]"
            } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
          >
            <h2>Batch</h2>
            {clickBatch.clickStatus ? (
              <div className="2xl:w-32 xl:w-56 2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 xl:translate-x-[-8%] xl:translate-y-[-9%] 2xl:translate-x-[60%] 2xl:translate-y-[7%]">
                <button
                  onClick={() => {
                    setClickBatch((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                    setClick_2(setClickBOverall);
                  }}
                  className={`w-full bg-slate-100 ${
                    clickBOverall.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  Overall
                </button>
                <button
                  onClick={() => {
                    setClickBatch((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                    setClick_2(setClickB12);
                  }}
                  className={`w-full bg-slate-100 ${
                    clickB12.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  12
                </button>
                <button
                  onClick={() => {
                    setClickBatch((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                    setClick_2(setClickB13);
                  }}
                  className={`w-full bg-slate-100 ${
                    clickB13.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  13
                </button>
                <button
                  onClick={() => {
                    setClickBatch((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                    setClick_2(setClickB14);
                  }}
                  className={`w-full bg-slate-100 ${
                    clickB14.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  14
                </button>
                <button
                  onClick={() => {
                    setClickBatch((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                    setClick_2(setClickB15);
                  }}
                  className={`w-full bg-slate-100 ${
                    clickB15.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  15
                </button>
                <button
                  onClick={() => {
                    setClickBatch((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                    setClick_2(setClickB16);
                  }}
                  className={`w-full bg-slate-100 ${
                    clickB16.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  16
                </button>
                <button
                  onClick={() => {
                    setClickBatch((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                    setClick_2(setClickB17);
                  }}
                  className={`w-full bg-slate-100 ${
                    clickB17.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  17
                </button>
                <button
                  onClick={() => {
                    setClickBatch((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                    setClick_2(setClickB18);
                  }}
                  className={`w-full bg-slate-100 ${
                    clickB18.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  18
                </button>
                <button
                  onClick={() => {
                    setClickBatch((prev) => ({
                      ...prev,
                      clickStatus: !prev.clickStatus,
                    }));
                    setClick_2(setClickB19);
                  }}
                  className={`w-full bg-slate-100 ${
                    clickB19.clickStatus ? "bg-slate-300" : "bg-slate-100"
                  } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                >
                  19
                </button>
              </div>
            ) : (
              ""
            )}
          </button>
        </div>
        {result().status ? (
          <NavLink
            to={`routine_${result().route}`}
            className={`2xl:mt-80 xl:mt-52 2xl:text-2xl xl:text-xl px-6 py-2 rounded-lg bg-green-800 font-semibold`}
          >
            Continue
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Tempmain;
