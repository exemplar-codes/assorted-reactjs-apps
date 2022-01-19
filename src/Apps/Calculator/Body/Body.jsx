import React from "react";

import "./Body.css";
import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";

const Body = () => {
  return (
    <div className="outer-body">
      <Display />
      <Keypad />
    </div>
  );
};

export default Body;
