import React, { useEffect, useState, useRef } from 'react';
import Countdown from 'antd/lib/statistic/Countdown';

const Timer = () => {
    const oldDateObj = new Date();
    let newDateObj = new Date();
    newDateObj.setTime(oldDateObj.getTime() + (30 * 60 * 1000));
    const [seconds, setSeconds] = useState(30);
  const [countdownDate, setCountdownDate] = useState(newDateObj.getTime());
  const [isActive, setIsActive] = useState(false);
  const [working, setWorking] = useState(1);
  function toggle() {
    /*if (seconds > 0) {
        setIsActive(1);
    } else {
        console.log(1);
        setIsActive(0);
    }*/
    if (working) {
        alert("It's time to rest!");
        setWorking(0);
        setSeconds(5);
        setIsActive(1)
    } else {
        alert("Your res is up!")
        setWorking(1);
        setSeconds(30);
        setIsActive(1)
    }
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      if (seconds <= 0) {
          //setIsActive(0)
         toggle();
         //alert("It's time to rest!");
         //reset();
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
      console.log(2)
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );

  
};


  export default Timer