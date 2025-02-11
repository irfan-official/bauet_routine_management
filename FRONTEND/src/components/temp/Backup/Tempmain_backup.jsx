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

  function teacherData() {
    if (clickAPDMRH.clickStatus) {
      return {
        teacher_priority: "Adjunt teacher",
        teacher_name: "Dr. Mirza A.F.M. Rashidul Hasan",
      };
    } else if (clickAPDMSUZ.clickStatus) {
      return {
        teacher_priority: "Adjunt teacher",
        teacher_name: "Prof. Dr.Md. Shahis Uz Zaman",
      };
    } else if (clickPFMGSB.clickStatus) {
      return {
        teacher_priority: "Professor",
        teacher_name: "Mohammed Golam Sarwar Bhuyan",
      };
    } else if (clickATMAY.clickStatus) {
      return {
        teacher_priority: "Associate Professor",
        teacher_name: "Must. Asma Yasmin",
      };
    } else if (clickATAS.clickStatus) {
      return {
        teacher_priority: "Associate Professor",
        teacher_name: "Ananya Sarker",
      };
    } else if (clickAPMOF.clickStatus) {
      return {
        teacher_priority: "Assistant Professor",
        teacher_name: "Md. Omar Faruq",
      };
    } else if (clickAPMK.clickStatus) {
      return {
        teacher_priority: "Assistant Professor",
        teacher_name: "Mithun Kumar",
      };
    } else if (clickAPSKP.clickStatus) {
      return {
        teacher_priority: "Assistant Professor",
        teacher_name: "Subrata Kumer Paul",
      };
    } else if (clickLMNS.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Md. Nazmus Salehin",
      };
    } else if (clickLBRY.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Bristi Rani Roy",
      };
    } else if (clickLMIS.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Mst. Irin Sultana",
      };
    } else if (clickLRRP.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Rakhi Rani Paul",
      };
    } else if (clickLASP.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Aroni Saha Prapty",
      };
    } else if (clickLMM.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "MUHTASIM",
      };
    } else if (clickLRH.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Redoanul Haque",
      };
    } else if (clickLMRI.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Md Rafiqul Islam (Rafiq)",
      };
    } else if (clickLMAR.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Md. Atikur Rahman",
      };
    } else if (clickLSNH.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Syed Nahin Hossain",
      };
    } else if (clickLMMH.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Md. Momenul Haque",
      };
    } else if (clickLPR.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Powlomi Roy",
      };
    } else if (clickLMSHU.clickStatus) {
      return {
        teacher_priority: "Lecturer",
        teacher_name: "Md. Samin Hossain Utsho",
      };
    }
  }

  function checkStatus() {
    if (clickAPDMRH.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleAPDMRH,
        setScheduleData: setScheduleAPDMRH,
      };
    } else if (clickAPDMSUZ.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleAPDMSUZ,
        setScheduleData: setScheduleAPDMSUZ,
      };
    } else if (clickPFMGSB.clickStatus) {
      return {
        status: true,
        scheduleData: schedulePFMGSB,
        setScheduleData: setSchedulePFMGSB,
      };
    } else if (clickATMAY.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleATMAY,
        setScheduleData: setScheduleATMAY,
      };
    } else if (clickATAS.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleATAS,
        setScheduleData: setScheduleATAS,
      };
    } else if (clickAPMOF.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleAPMOF,
        setScheduleData: setScheduleAPMOF,
      };
    } else if (clickAPMK.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleAPMK,
        setScheduleData: setScheduleAPMK,
      };
    } else if (clickAPSKP.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleAPSKP,
        setScheduleData: setScheduleAPKSP,
      };
    } else if (clickLMNS.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLMNS,
        setScheduleData: setScheduleLMNS,
      };
    } else if (clickLBRY.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLBRY,
        setScheduleData: setScheduleLBRY,
      };
    } else if (clickLMIS.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLMIS,
        setScheduleData: setScheduleLMIS,
      };
    } else if (clickLRRP.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLRRP,
        setScheduleData: setScheduleLRRP,
      };
    } else if (clickLASP.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLASP,
        setScheduleData: setScheduleLASP,
      };
    } else if (clickLMM.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLMM,
        setScheduleData: setScheduleLMM,
      };
    } else if (clickLRH.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLRH,
        setScheduleData: setScheduleLRH,
      };
    } else if (clickLMRI.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLMRI,
        setScheduleData: setScheduleLMRI,
      };
    } else if (clickLMAR.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLMAR,
        setScheduleData: setScheduleLMAR,
      };
    } else if (clickLSNH.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLSNH,
        setScheduleData: setScheduleLSNH,
      };
    } else if (clickLMMH.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLMMH,
        setScheduleData: setScheduleLMMH,
      };
    } else if (clickLPR.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLPR,
        setScheduleData: setScheduleLPR,
      };
    } else if (clickLMSHU.clickStatus) {
      return {
        status: true,
        scheduleData: scheduleLMSHU,
        setScheduleData: setScheduleLMSHU,
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
      teacher_priority: `${teacherData().teacher_priority}`,
      teacher_name: `${teacherData().teacher_name}`,
      teaching_schedule: prev.teaching_schedule.map((item, idx) =>
        idx === index ? { ...item, [name]: checked } : item
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", checkStatus().scheduleData);
  };

  function setClickResults_1(catchFunction_1) {
    let allFunction_1 = [
      setClickAT,
      setClickPF,
      setClickAP,
      setClickASTP,
      setClickLC,
      setClickAI,
    ];
    allFunction_1.forEach((itemFunction, index) => {
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

  function setClickResults_2(catchFunction_2) {
    let allFunction_2 = [
      setClickAPDMRH,
      setClickAPDMSUZ,
      setClickPFMGSB,
      setClickATMAY,
      setClickATAS,
      setClickAPMOF,
      setClickAPMK,
      setClickAPSKP,
      setClickLMNS,
      setClickLBRY,
      setClickLMIS,
      setClickLRRP,
      setClickLASP,
      setClickLMM,
      setClickLRH,
      setClickLMRI,
      setClickLMAR,
      setClickLSNH,
      setClickLMMH,
      setClickLPR,
      setClickLMSHU,
    ];

    allFunction_2.forEach((itemFunction, index) => {
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
  return (
    <div className="w-full h-[calc(100vh-5rem)] flex bg-white overflow-hidden items-center justify-center">
      {currentBatch ? (
        "Loading..."
      ) : (
        <>
          <div className="2xl:w-5/12 xl:w-4/12 h-full flex flex-col gap-6 items-center justify-center ">
            <button
              onClick={() => {
                setClickResults_1(setClickAT);
              }}
              className={`${
                clickAT.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Adjunct Teacher</h2>
              {clickAT.clickStatus ? (
                <div className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[50%] translate-y-[-30%] ">
                  <button
                    onClick={() => {
                      setClickResults_2(setClickAPDMRH);
                      setClickResults_1(setClickAT);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickAPDMRH.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Dr. Mirza A.F.M. Rashidul Hasan
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_2(setClickAPDMSUZ);
                      setClickResults_1(setClickAT);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickAPDMSUZ.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Prof. Dr.Md. Shahid Uz Zaman
                  </button>
                </div>
              ) : (
                ""
              )}
            </button>
            <button
              onClick={() => {
                setClickResults_1(setClickPF);
              }}
              className={`${
                clickPF.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Professor</h2>
              {clickPF.clickStatus ? (
                <div
                  className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] 
                   border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[45%] translate-y-[-30%]"
                >
                  <button
                    onClick={() => {
                      setClickResults_2(setClickPFMGSB);
                      setClickResults_1(setClickPF);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickPFMGSB.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Mohammed Golam Sarwar Bhuyan
                  </button>
                </div>
              ) : (
                ""
              )}
            </button>
            <button
              onClick={() => {
                setClickResults_1(setClickAP);
              }}
              className={`${
                clickAP.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Associate Professor</h2>
              {clickAP.clickStatus ? (
                <div className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[95%] translate-y-[-30%] ">
                  <button
                    onClick={() => {
                      setClickResults_1(setClickAP);
                      setClickResults_2(setClickATMAY);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickATMAY.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Must. Asma Yasmin
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickAP);
                      setClickResults_2(setClickATAS);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickATAS.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Ananya Sarker
                  </button>
                </div>
              ) : (
                ""
              )}
            </button>
            <button
              onClick={() => {
                setClickResults_1(setClickASTP);
              }}
              className={`${
                clickASTP.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Assistant Professor</h2>
              {clickASTP.clickStatus ? (
                <div className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[90%] translate-y-[-27%]">
                  <button
                    onClick={() => {
                      setClickResults_1(setClickASTP);
                      setClickResults_2(setClickAPMOF);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickAPMOF.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Md. Omar Faruq
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickASTP);
                      setClickResults_2(setClickAPMK);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickAPMK.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Mithun Kumar
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickASTP);
                      setClickResults_2(setClickAPSKP);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickAPSKP.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Subrata Kumer Paul
                  </button>
                </div>
              ) : (
                ""
              )}
            </button>
            <button
              onClick={() => {
                setClickResults_1(setClickLC);
              }}
              className={`${
                clickLC.clickStatus
                  ? "bg-[#3d4668] text-lime-200 hover:text-lime-50"
                  : "bg-[#7480A8]"
              } 2xl:w-72 2xl:py-6 xl:w-48 xl:py-3 rounded-md hover:bg-[#3d4668] hover:text-lime-200 font-semibold text-lg relative`}
            >
              <h2>Lecturer</h2>
              {clickLC.clickStatus ? (
                <div className="2xl:scale-[1] xl:scale-[0.6] flex flex-col p-3 gap-2 items-center justify-center bg-[#C1C6C4] border border-[#68766F] rounded-lg absolute 2xl:top-16 xl:top-3 z-50 translate-x-[70%] translate-y-[-65%] ">
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLMNS);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLMNS.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Md. Nazmus Salehin
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLBRY);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLBRY.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Bristi Rani Roy
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLMIS);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLMIS.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Mst. Irin Sultana
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLRRP);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLRRP.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Rakhi Rani Paul
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLASP);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLASP.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Aroni Saha Prapty
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLMM);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLMM.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    MUHTASIM
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLRH);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLRH.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Redoanul Haque
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLMRI);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLMRI.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Md Rafiqul Islam (Rafiq)
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLMAR);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLMAR.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Md. Atikur Rahman
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLSNH);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLSNH.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Syed Nahin Hossain
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLMMH);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLMMH.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Md. Momenul Haque
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLPR);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLPR.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
                    Powlomi Roy
                  </button>
                  <button
                    onClick={() => {
                      setClickResults_1(setClickLC);
                      setClickResults_2(setClickLMSHU);
                    }}
                    className={`w-full bg-slate-100 ${
                      clickLMSHU.clickStatus ? "bg-slate-300" : "bg-slate-100"
                    } text-black py-2 px-2 rounded-lg border text-nowrap hover:bg-slate-300`}
                  >
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
                  className="flex flex-col items-center justify-center 2xl:scale-[1] xl:scale-[0.7] w-full h-full gap-10 relative"
                >
                  <h1 className="font-semibold text-4xl text-lime-600 mb-10">
                    Schedule & Time
                  </h1>

                  <div className="px-4 2xl:scale-[1] xl:scale-[1.1] relative">
                    <h1 className="font-semibold text-xl text-[#7480A8] absolute top-[-10%] left-[1.5%]">
                      {teacherData().teacher_name}
                    </h1>
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
