import React from "react";
import Key from "./Key/Key";

import "./Keypad.css";

const Keypad = () => {
  //   let key = <Key />;
  return (
    <div className="keypad-main">
      {[...Array(16)].map((_, i) => (
        <Key number={i} />
      ))}
    </div>
  );
};

export default Keypad;
