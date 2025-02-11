import React from "react";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="w-full min-h-screen  text-black flex flex-col items-center justify-start relative z-10 overflow-hidden">
      <div className="w-full h-screen absolute flex items-center justify-center -z-10">
        <img className="scale-[.5] 2xl:scale-[.8]" src="bauetlogo.png" alt="" />
      </div>
      <h1 className="text-4xl text-lime-700 font-semibold mt-32 font-mono 2xl:text-5xl 2xl:mt-56">
        Welcome To The BAUET Routine Management
      </h1>
      <h2 className="text-3xl text-lime-800 mt-16 font-extralight font-mono 2xl:text-4xl">
        Want To Generate Routine
      </h2>
      <div className="w-full flex items-center justify-center gap-16 mt-7 relative z-50 2xl:mt-14">
        <NavLink
          to="/login"
          className="bg-lime-600 text-white w-28 py-2 rounded-lg font-semibold relative z-50 2xl:scale-[1.2] text-center"
        >
          LOGIN
        </NavLink>
        <NavLink
          to="/signup"
          className="bg-slate-600 text-white w-28 py-2 rounded-lg font-semibold relative z-50 2xl:scale-[1.2] text-center"
        >
          SIGNUP
        </NavLink>
      </div>
      <img
        className="absolute bottom-[-20%] right-[-17%] z-30  scale-[.3] 2xl:bottom-[-10%] 2xl:right-[-10%] 2xl:scale-[0.45]"
        src="clock3D.png"
        alt=""
      />
      <img
        className="absolute bottom-[0%] 2xl:left-[0%] xl:left-[-2%] z-30 2xl:scale-[.8] xl:scale-[.6]"
        src="calender3D.png"
        alt=""
      />
      <img
        className="absolute top-[-10%] right-[-6%] z-30  scale-[.4] 2xl:right-[-1%] 2xl:top-[-5%] 2xl:scale-[0.6]"
        src="book3D.png"
        alt=""
      />
      <img
        className="absolute top-[0%] right-[0%] z-50  scale-[0] 2xl:right-[19%] 2xl:top-[10%] 2xl:scale-[3.5]"
        src="topline.svg"
        alt=""
      />
      <img
        className="absolute bottom-[16%] 2xl:left-[20%] xl:left-[-2%] z-30 2xl:scale-[3.5] xl:scale-[0]"
        src="bottomline.svg"
        alt=""
      />
      <img
        className="absolute top-[13%] right-[-2%] z-30  scale-[.4] 2xl:scale-[0.65] 2xl:top-[26%] 2xl:right-[3%]"
        src="Task3D.svg"
        alt=""
      />
      <img
        className="absolute top-[-36%] left-[-10%] z-30  scale-[.4] 2xl:top-[-14%] 2xl:left-[1%] 2xl:scale-[0.64]"
        src="bell3D.png"
        alt=""
      />
      <img
        className="absolute top-[36%] left-[-1%] z-20 scale-[1] 2xl:scale-150 "
        style={{
          transform:
            "perspective(800px) rotateX(20deg) rotateY(55deg) rotatez(-10deg)",
          transformOrigin: "center",
        }}
        src="Routine3D.jpg"
        alt=""
      />
      <img
        className="absolute top-[9%] left-[-3%] z-10  scale-[1] 2xl:top-[18%]"
        style={{
          transform:
            "perspective(800px) rotateX(20deg) rotateY(55deg) rotatez(-2deg)",
          transformOrigin: "center",
        }}
        src="12.00.svg"
        alt=""
      />
      <img
        className="absolute top-[-30%] left-[10%] z-50 "
        style={{
          transform:
            "perspective(800px) rotateX(35deg) rotateY(50deg) rotatez(-10deg)",
          transformOrigin: "center",
          scale: ".1",
        }}
        src="leaves.png"
        alt=""
      />
      <div className="absolute bottom-[-3%] right-[22%] z-50  scale-[1] flex flex-col items-center justify-center 2xl:bottom-[10%] 2xl:right-[28%] 2xl:scale-[1.5]">
        <img
          style={{
            transform:
              "perspective(800px) rotateX(50deg) rotateY(40deg) rotatez(-65deg)",
            transformOrigin: "center",
            scale: "0.6",
          }}
          src="200-OK.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
