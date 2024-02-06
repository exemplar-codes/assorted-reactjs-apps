import React, { useState } from "react";

function MultiStateSingle() {
  const [state, setState] = useState({ count: 0, reverseCount: 999 });

  // const countClick = () => {
  //   setState({
  //       ...state,
  //       count: state.count + 1,
  //   });
  // };
  // const reverseCountClick = () => {
  //   setState({
  //       ...state,
  //       reverseCount: state.reverseCount - 1,
  //   });
  // };

  const countClick = () => {
    setState((latestState) => {
      return {
        ...latestState,
        count: latestState.count + 1,
      };
    });
  };
  const reverseCountClick = () => {
    setState((latestState) => {
      return {
        ...latestState,
        reverseCount: latestState.reverseCount - 1,
      };
    });
  };

  return (
    <div>
      <button onClick={countClick}>+: {state.count}</button> &nbsp;
      <button onClick={reverseCountClick}>-: {state.reverseCount} </button>
    </div>
  );
}

export default MultiStateSingle;
