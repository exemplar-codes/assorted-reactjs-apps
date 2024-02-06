import React, { useState } from "react";

import "./AddButtonPill.css";
import InitialPill from "./InitialPill";
import NumberedPill from "./NumberedPill";

function AddButtonPill() {
  const [clicked, setClicked] = useState(false);

  return (
    <span
      onClick={!clicked ? () => setClicked(true) : () => { }}
      style={{backgroundColor: !clicked ? "blue":"red"}}
    >
      {!clicked ? (
        <InitialPill />
      ) : (
        <NumberedPill reset={() => setClicked(false)} />
      )}
    </span>
  );
}

export default AddButtonPill;
