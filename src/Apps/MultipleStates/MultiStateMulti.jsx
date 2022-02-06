import React, { useState } from "react";

function MultiStateMulti() {
  const [count, setCount] = useState(0);
  const [reverseCount, setReverseCount] = useState(999);

  const countClick = () => {
    setCount(count + 1);
  };

  const reverseCountClick = () => {
    setReverseCount(reverseCount - 1);
  };

  return (
    <div>
      <button onClick={countClick}>+: {count}</button> &nbsp;
      <button onClick={reverseCountClick}>-: {reverseCount} </button>
    </div>
  );
}

export default MultiStateMulti;
