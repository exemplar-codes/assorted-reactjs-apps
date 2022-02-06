import React, { useState } from "react";

let onSecond = (time, setTime) => {
  setTime(time + 1);
};

function TimerUsingHook() {
  let [time, setTime] = useState(0);

  // prepare to do ++ after 1 second
  setTimeout(() => {
    setTime((time = time + 1));
  }, 1000);
  return <h1>Simple timer: {time}</h1>;
}

export default TimerUsingHook;
