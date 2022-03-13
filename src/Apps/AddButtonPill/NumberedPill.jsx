import React, { useState } from "react";

import "./NumberedPill.css";

function NumberedPill(props) {
  const [count, setCount] = useState(1);

  return (
    <span className="numbered-pill">
      <span
        className="box ops minus"
        onClick={() =>
          count === 1 ? props.reset() : setCount((prevCount) => prevCount - 1)
        }
      >
        -
      </span>
      <span className="box">{count}</span>
      <span
        className="box ops plus"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </span>
    </span>
  );
}

export default NumberedPill;
