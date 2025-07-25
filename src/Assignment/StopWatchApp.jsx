import React, { useEffect, useState } from "react";

const StopWatchApp = () => {
  const [time, setTime] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const startTimer = () => {
    const id = setInterval(() => {
      const ct = new Date();
      setTime(
        ct.toLocaleTimeString() +
          ":" +
          ct.getMilliseconds().toString().slice(0, 2)
      );
    }, 100);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };
  const clearTimer = () => {
    stopTimer();
    setTime("");
  };

  return (                                                      
    <div>
      <h3>{time}</h3>
      <button onClick={startTimer}>Start</button> &nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>&nbsp;&nbsp;
      <button onClick={clearTimer}>Clear</button>
      <h1>Stop Watch </h1>
    </div>
  );
};

export default StopWatchApp;
