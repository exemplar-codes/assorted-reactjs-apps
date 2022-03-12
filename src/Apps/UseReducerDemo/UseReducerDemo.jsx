import React, { useReducer } from "react";

function reducerFunc(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.delta };
    case "DECREMENT":
      return { count: state.count - action.delta };
    default:
      return state;
  }
}

function UseReducerDemo() {
  const [stateVar, dispatch] = useReducer(reducerFunc, { count: 0 });

  return (
    <>
      <h3>{stateVar.count}</h3>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            delta: Math.floor(Math.random() * 100) % 10,
          })
        }
      >
        +1
      </button>
      &nbsp;
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            delta: Math.floor(Math.random() * 100) % 10,
          })
        }
      >
        -1
      </button>
    </>
  );
}

export default UseReducerDemo;
