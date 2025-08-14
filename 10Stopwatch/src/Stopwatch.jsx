import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 10); // increase by 10 ms
      }, 10); // update every 10ms
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>⏱ Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
