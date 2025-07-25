import React, { useEffect, useState } from "react";

const TimerTest = () => {
    const [currentTime, setCount] = useState(0);
    useEffect(() => {
        console.log("Interval start");
        const timer = setInterval(() => {
        setCount(new Date().toLocaleTimeString());
      
    },1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>Timer: {currentTime}</div>;
};

export default TimerTest;
