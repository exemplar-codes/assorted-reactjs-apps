import React from "react";

import "./InitialPill.css";

function InitialPill(props) {
  return (
    <span className="initial-pill" onClick={props.startNumbered}>
      <span className="center">ADD</span>
      <span className="up">+</span>
    </span>
  );
}

export default InitialPill;
