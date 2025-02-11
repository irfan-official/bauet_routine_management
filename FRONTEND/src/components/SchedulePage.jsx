import React from "react";
import Nav from "./Nav";
import ScheduleMain from "./ScheduleMain";

function SchedulePage({currentBatch, setCurrentBatch}) {
  return (
    <div className="overflow-x-hidden">
      <Nav currentBatch={currentBatch} setCurrentBatch={setCurrentBatch}/>
      <ScheduleMain currentBatch={currentBatch}/>
    </div>
  );
}

export default SchedulePage;
