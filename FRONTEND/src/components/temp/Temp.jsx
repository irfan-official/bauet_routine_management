import React from "react";
import Nav from "../Nav";
import Temp_13 from "./Temp_13";
import Tempmain from "./Tempmain.jsx";

function SchedulePage({ currentBatch, setCurrentBatch }) {
  return (
    <div className="overflow-x-hidden">
      <Nav currentBatch={currentBatch} setCurrentBatch={setCurrentBatch} />
      <Tempmain currentBatch={currentBatch} />
    </div>
  );
}

export default SchedulePage;
