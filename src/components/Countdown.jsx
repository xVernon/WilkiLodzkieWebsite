import React, { useState, useEffect } from "react";
import "./Countdown.css";

const CURRENT_DATE = new Date();
const COUNTDOWN_TARGET = CURRENT_DATE.setDate(CURRENT_DATE.getDate() + 3);

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60) % 60));
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown">
      <h2>COUNTDOWN</h2>
      <div className="contentCount">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return ( <div className="box">
          <div className="value">
            <span>{value}</span>
          </div>
          <span className="label"> {label} </span>
        </div> 
        );
        })}
      </div>
      <button>GAME INFO</button>
    </div>
  );
};

export default Countdown;
