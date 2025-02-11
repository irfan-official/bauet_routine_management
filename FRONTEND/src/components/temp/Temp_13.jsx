import React from "react";
import Nav from "../Nav.jsx";
import Temp_main13 from "./Temp_main13.jsx";

function Temp_13({ currentBatch, setCurrentBatch }) {
  return (
    <div className="overflow-x-hidden">
      <Nav currentBatch={currentBatch} setCurrentBatch={setCurrentBatch} />
      <Temp_main13 currentBatch={currentBatch} />
    </div>
  );
}

export default Temp_13;
