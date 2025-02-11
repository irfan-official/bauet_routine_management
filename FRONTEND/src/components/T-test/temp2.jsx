import React, { useState } from "react";
import default_template from "../../apis/teacher_schedule_selection.js";

function Tempmain({ currentBatch }) {
  const [clickAT, setClickAT] = useState({
    clickStatus: false,
  });
  const [clickPF, setClickPF] = useState({
    clickStatus: false,
  });
  const [clickAP, setClickAP] = useState({
    clickStatus: false,
  });
  const [clickASTP, setClickASTP] = useState({
    clickStatus: false,
  });
  const [clickLC, setClickLC] = useState({
    clickStatus: false,
  });
  const [clickAI, setClickAI] = useState({
    clickStatus: false,
  });

  function scheduleTemplate() {
    return {
      teacher_priority: "",
      teacher_name: "",
      teaching_category: "",
      teaching_schedule: default_template,
    };
  }

  const [scheduleAT, setScheduleAT] = useState({ ...scheduleTemplate() });
  const [schedulePF, setSchedulePF] = useState({ ...scheduleTemplate() });
  const [scheduleAP, setScheduleAP] = useState({ ...scheduleTemplate() });
  const [scheduleASTP, setScheduleASTP] = useState({ ...scheduleTemplate() });
  const [scheduleLC, setScheduleLC] = useState({ ...scheduleTemplate() });
  const [scheduleAI, setScheduleAI] = useState({ ...scheduleTemplate() });

  const [scheduleAPDMRH, setScheduleAPDMRH] = useState({
    ...scheduleTemplate(),
  });
  const [clickAPDMRH, setClickAPDMRH] = useState({
    clickStatus: false,
  });

  const [scheduleAPDMSUZ, setScheduleAPDMSUZ] = useState({
    ...scheduleTemplate(),
  });
  const [clickAPDMSUZ, setClickAPDMSUZ] = useState({
    clickStatus: false,
  });

  const [schedulePFMGSB, setSchedulePFMGSB] = useState({
    ...scheduleTemplate(),
  });
  const [clickPFMGSB, setClickPFMGSB] = useState({
    clickStatus: false,
  });

  const [scheduleATMAY, setScheduleATMAY] = useState({ ...scheduleTemplate() });
  const [clickATMAY, setClickATMAY] = useState({
    clickStatus: false,
  });

  const [scheduleATAS, setScheduleATAS] = useState({ ...scheduleTemplate() });
  const [clickATAS, setClickATAS] = useState({
    clickStatus: false,
  });

  const [scheduleAPMOF, setScheduleAPMOF] = useState({ ...scheduleTemplate() });
  const [clickAPMOF, setClickAPMOF] = useState({
    clickStatus: false,
  });

  const [scheduleAPMK, setScheduleAPMK] = useState({ ...scheduleTemplate() });
  const [clickAPMK, setClickAPMK] = useState({
    clickStatus: false,
  });

  const [scheduleAPSKP, setScheduleAPKSP] = useState({ ...scheduleTemplate() });
  const [clickAPSKP, setClickAPSKP] = useState({
    clickStatus: false,
  });

  const [scheduleLMNS, setScheduleLMNS] = useState({ ...scheduleTemplate() });
  const [clickLMNS, setClickLMNS] = useState({
    clickStatus: false,
  });

  const [scheduleLBRY, setScheduleLBRY] = useState({ ...scheduleTemplate() });
  const [clickLBRY, setClickLBRY] = useState({
    clickStatus: false,
  });

  const [scheduleLMIS, setScheduleLMIS] = useState({ ...scheduleTemplate() });
  const [clickLMIS, setClickLMIS] = useState({
    clickStatus: false,
  });

  const [scheduleLRRP, setScheduleLRRP] = useState({ ...scheduleTemplate() });
  const [clickLRRP, setClickLRRP] = useState({
    clickStatus: false,
  });

  const [scheduleLASP, setScheduleLASP] = useState({ ...scheduleTemplate() });
  const [clickLASP, setClickLASP] = useState({
    clickStatus: false,
  });

  const [scheduleLMM, setScheduleLMM] = useState({ ...scheduleTemplate() });
  const [clickLMM, setClickLMM] = useState({
    clickStatus: false,
  });

  const [scheduleLRH, setScheduleLRH] = useState({ ...scheduleTemplate() });
  const [clickLRH, setClickLRH] = useState({
    clickStatus: false,
  });

  const [scheduleLMRI, setScheduleLMRI] = useState({ ...scheduleTemplate() });
  const [clickLMRI, setClickLMRI] = useState({
    clickStatus: false,
  });

  const [scheduleLMAR, setScheduleLMAR] = useState({ ...scheduleTemplate() });
  const [clickLMAR, setClickLMAR] = useState({
    clickStatus: false,
  });

  const [scheduleLSNH, setScheduleLSNH] = useState({ ...scheduleTemplate() });
  const [clickLSNH, setClickLSNH] = useState({
    clickStatus: false,
  });

  const [scheduleLMMH, setScheduleLMMH] = useState({ ...scheduleTemplate() });
  const [clickLMMH, setClickLMMH] = useState({
    clickStatus: false,
  });

  const [scheduleLPR, setScheduleLPR] = useState({ ...scheduleTemplate() });
  const [clickLPR, setClickLPR] = useState({
    clickStatus: false,
  });

  const [scheduleLMSHU, setScheduleLMSHU] = useState({ ...scheduleTemplate() });
  const [clickLMSHU, setClickLMSHU] = useState({
    clickStatus: false,
  });

  function Selection_teacher_priority() {
    if (clickAT.clickStatus) {
      return "Adjunt teacher";
    } else if (clickPF.clickStatus) {
      return "Professor";
    } else if (clickAP.clickStatus) {
      return "Associate Professor";
    } else if (clickASTP.clickStatus) {
      return "Assistant Professor";
    } else if (clickLC.clickStatus) {
      return "Lecturer";
    } else if (clickAI.clickStatus) {
      return "Adjunt Instructor";
    }
  }

  function checkStatus() {
    if (clickAT.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleAT,
        setScheduleData: setScheduleAT,
      };
    } else if (clickPF.clickStatus) {
      return {
        status: true,
        scheduleData: schedulePF,
        setScheduleData: setSchedulePF,
      };
    } else if (clickAP.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleAP,
        setScheduleData: setScheduleAP,
      };
    } else if (clickASTP.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleASTP,
        setScheduleData: setScheduleASTP,
      };
    } else if (clickLC.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLC,
        setScheduleData: setScheduleLC,
      };
    } else if (clickAI.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleAI,
        setScheduleData: setScheduleAI,
      };
    } else {
      return {
        status: false,
        scheduleData: {},
        setScheduleData: () => {},
      };
    }
  }
  //checkStatus().scheduleData.teaching_schedule

  const handleChange = (e, index) => {
    const { name, checked } = e.target;

    checkStatus().setScheduleData((prev) => ({
      ...prev,
      teacher_priority: `${Selection_teacher_priority()}`,
      teaching_schedule: prev.teaching_schedule.map((item, idx) =>
        idx === index ? { ...item, [name]: checked } : item
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", checkStatus().scheduleData);
  };

  function setClickResults(catchFunction) {
    let allFunction = [
      setClickAT,
      setClickPF,
      setClickAP,
      setClickASTP,
      setClickLC,
      setClickAI,
    ];
    allFunction.forEach((itemFunction, index) => {
      itemFunction === catchFunction
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
  return (
    <div className="w-full h-[calc(100vh-5rem)] flex bg-white overflow-hidden items-center justify-center">
      {currentBatch ? (
        "Loading..."
      ) : (
        <>
          <div className="2xl:w-5/12 xl:w-4/12 h-full flex flex-col gap-6 items-center justify-center ">
            <button
              onClick={() => {
                setClickResults(setClickAT);
              }}
              className={`${
                clickAT.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Adjunct Teacher</h2>
              {false ? (
                <div className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[50%] translate-y-[-30%] ">
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Dr. Mirza A.F.M. Rashidul Hasan
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Prof. Dr.Md. Shahid Uz Zaman
                  </button>
                </div>
              ) : (
                ""
              )}
            </button>
            <button
              onClick={() => {
                setClickResults(setClickPF);
              }}
              className={`${
                clickPF.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Professor</h2>
              {false ? (
                <div className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[45%] translate-y-[-30%] ">
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Mohammed Golam Sarwar Bhuyan
                  </button>
                </div>
              ) : (
                ""
              )}
            </button>
            <button
              onClick={() => {
                setClickResults(setClickAP);
              }}
              className={`${
                clickAP.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Associate Professor</h2>
              {false ? (
                <div className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[95%] translate-y-[-30%] ">
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Must. Asma Yasmin
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Ananya Sarker
                  </button>
                </div>
              ) : (
                ""
              )}
            </button>
            <button
              onClick={() => {
                setClickResults(setClickASTP);
              }}
              className={`${
                clickASTP.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Assistant Professor</h2>
              {false ? (
                <div className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[90%] translate-y-[-27%]">
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Md. Omar Faruq
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Mithun Kumar
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Subrata Kumer Paul
                  </button>
                </div>
              ) : (
                ""
              )}
            </button>
            <button
              onClick={() => {
                setClickResults(setClickLC);
              }}
              className={`${
                clickLC.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Lecturer</h2>
              {false ? (
                <div className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[70%] translate-y-[-65%] ">
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Md. Nazmus Salehin
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Bristi Rani Roy
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Mst. Irin Sultana
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Rakhi Rani Paul
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Aroni Saha Prapty
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    MUHTASIM
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Redoanul Haque
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Md Rafiqul Islam (Rafiq)
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Md. Atikur Rahman
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Syed Nahin Hossain
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Md. Momenul Haque
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Powlomi Roy
                  </button>
                  <button className="w-full bg-slate-100 text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300">
                    Md. Samin Hossain Utsho
                  </button>
                </div>
              ) : (
                ""
              )}
            </button>
            <button
              onClick={() => {
                setClickAT((prev) =>
                  prev.clickStatus
                    ? { ...prev, clickStatus: !prev.clickStatus }
                    : { ...prev }
                );
                setClickPF((prev) =>
                  prev.clickStatus
                    ? { ...prev, clickStatus: !prev.clickStatus }
                    : { ...prev }
                );
                setClickAP((prev) =>
                  prev.clickStatus
                    ? { ...prev, clickStatus: !prev.clickStatus }
                    : { ...prev }
                );
                setClickASTP((prev) =>
                  prev.clickStatus
                    ? { ...prev, clickStatus: !prev.clickStatus }
                    : { ...prev }
                );
                setClickLC((prev) =>
                  prev.clickStatus
                    ? { ...prev, clickStatus: !prev.clickStatus }
                    : { ...prev }
                );
                setClickAI((prev) => ({
                  ...prev,
                  clickStatus: !prev.clickStatus,
                }));
              }}
              className={`${
                clickAI.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg`}
            >
              <h2>Adjunct Instructor</h2>
            </button>
          </div>
          <div className="2xl:w-7/12 xl:w-8/12 h-full flex items-center justify-center relative">
            <div className="relative w-full h-full flex items-center justify-center">
              {checkStatus().status ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center justify-center 2xl:scale-[1] xl:scale-[0.7] w-full h-full gap-10"
                >
                  <h1 className="font-semibold text-4xl text-lime-600">
                    Schedule & Time
                  </h1>
                  <div className="px-4 2xl:scale-[1] xl:scale-[1.1]">
                    <table className="border-lime-600 text-black">
                      <thead>
                        <tr>
                          <th className="border px-2 border-lime-600">Day</th>
                          <th className="border px-2 border-lime-600">
                            8.15AM - 9.10AM
                          </th>
                          <th className="border px-2 border-lime-600">
                            9.15AM - 10.10AM
                          </th>
                          <th className="border px-2 border-lime-600">
                            10.15AM - 11.10AM
                          </th>
                          <th className="border px-2 border-lime-600">
                            11.40AM - 12.35PM
                          </th>
                          <th className="border px-2 border-lime-600">
                            12.40PM - 1.35PM
                          </th>
                          <th className="border px-2 border-lime-600">
                            1.40PM - 2.35PM
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {checkStatus().scheduleData.teaching_schedule.map(
                          (item, index) => (
                            <tr key={index}>
                              <td className="text-center h-14 py-6 border border-lime-600 px-5 font-semibold">
                                {item.day}
                              </td>
                              {Array.from({ length: 6 }).map((_, i) => (
                                <td
                                  key={`${index}-${i}`}
                                  className="text-center h-14 py-6 border border-lime-600"
                                >
                                  <input
                                    className="scale-[1.7]"
                                    type="checkbox"
                                    name={`time_${i + 1}`}
                                    checked={item[`time_${i + 1}`]}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </td>
                              ))}
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                  <button
                    type="submit"
                    className="text-white w-3/12 py-3 font-semibold rounded-lg bg-[#024522]"
                  >
                    GENERATE
                  </button>
                </form>
              ) : (
                <img className="scale-[0.5]" src="bauetlogo.png" alt="" />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Tempmain;
