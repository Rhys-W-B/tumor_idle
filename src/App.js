import "./App.css";
import React, { useState } from "react";
/* global BigInt */

function App() {
  const [microcount, setmicroCount] = useState(0);
  const [millicount, setmilliCount] = useState(0);
  const [measurement, setMeasurement] = useState("micrometers");
  const [displayVal, setDisplayVal] = useState(0);

  const calcMeasurement = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="images/Tumorbuddy.png"
          className="tumorBuddy"
          alt="logo"
          onClick={calcMeasurement}
        />
        <p>
          {measurement} Covered: {displayVal}
        </p>
      </header>
    </div>
  );
}

export default App;
