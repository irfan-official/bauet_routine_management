import React from "react";
import TeachersList from "./navComponents/TeachersList";
import StudentList from "./navComponents/StudentList";
import RoomList from "./navComponents/RoomList";
import RoomTypes from "./navComponents/RoomTypes";
import Course_Credit from "./navComponents/Course_Credit";
import { useState } from "react";
function Nav() {
  let [clickTeachersList, setClickTeachersList] = useState(false);
  let [clickStudentList, setClickStudentList] = useState(false);
  let [clickRoomList, setClickRoomList] = useState(false);
  let [clickRoomTypes, setClickRoomTypes] = useState(false);
  let [clickCourse_Credit, setClickCourse_Credit] = useState(false);
  return (
    <nav className="w-full 2xl:h-28 xl:h-20 bg-[#0F0E35] text-white flex items-center justify-evenly relative overflow-hidden">
      <button onClick={() => setClickTeachersList((prev) => !prev)}>
        <TeachersList click={clickTeachersList} />
      </button>

      <button onClick={() => setClickStudentList((prev) => !prev)}>
        <StudentList click={clickStudentList} />
      </button>

      <button onClick={() => setClickRoomList((prev) => !prev)}>
        <RoomList click={clickRoomList} />
      </button>

      <button
        onClick={() => {
          setClickRoomTypes((prev) => !prev);
        }}
      >
        <RoomTypes click={clickRoomTypes} />
      </button>
      <button
        onClick={() => {
          setClickCourse_Credit((prev) => !prev);
        }}
      >
        <Course_Credit click={clickCourse_Credit} />
      </button>
      <div className="absolute  2xl:right-[-3%] xl:right-[-6%] xl:scale-[0.6]">
        <img className="scale-[.3] " src="bauet.png" alt="" />
      </div>
    </nav>
  );
}

export default Nav;
