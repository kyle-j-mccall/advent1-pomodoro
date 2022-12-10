import React, { useState } from 'react';
import './Container.css';

export default function Pomodoro() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  console.log(running);
  const handleStart = () => {
    setRunning(true);
  };
  const handlePause = () => {
    setRunning(false);
  };

  return (
    <div className="pom-body">
      <div className="timer">
        <div className="timer-container">
          <div className="minutes">
            <input type="text" value="00"></input>
          </div>
          <div className="colon">:</div>
          <div className="seconds">
            <input type="text" value="00"></input>
          </div>
        </div>
        <div>
          {running ? (
            <div className="start-stop" onClick={handlePause}>
              PAUSE
            </div>
          ) : (
            <div className="start-stop" onClick={handleStart}>
              START
            </div>
          )}

          <img></img>
        </div>
      </div>
    </div>
  );
}
