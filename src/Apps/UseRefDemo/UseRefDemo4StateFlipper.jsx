import React, { useState, useRef } from "react";

import "./UseRefMain.css";

// compared to src/Apps/UseRefDemo/UseRefDemo.jsx
// to avoid long lines of ugly code
// need accessor
// need mutator
// we are using #selectorPath here, but it could be
// indicated by the element itself. No CSS/id needed

// function useRefHook(queryPath) {
//   const accessor = () => {
//     return document.querySelector(queryPath);
//   };

//   function mutator(name, value) {
//     document.querySelector(queryPath)[name] = value;
//   }

//   return [accessor, mutator];
// }

function UseRefDemo4StateFlipper() {
  const [showDisplay, setShowDisplay] = useState(false);
  const [enteredName, setEnteredName] = useState("");

  const nameRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (nameRef.current.value.length) {
      setEnteredName(nameRef.current.value); // displays name

      setShowDisplay(true); // flips display ON

      nameRef.current.value = ""; // clears input
    }
  };

  const resetHandler = () => {
    setShowDisplay(false); // close the display

    nameRef.current.value = ""; // clear the input if any
  };

  return (
    <div className="use-ref-demo">
      <h1>Demo</h1>
      <form onSubmit={onSubmitHandler} autoComplete="off">
        <label htmlFor="name-why">Enter name</label> <br />
        <br />
        <input type="text" id="name-why" ref={nameRef} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showDisplay && (
        <>
          <br />
          <br />
          <div>Entered Name: {enteredName}</div>
          <button onClick={resetHandler}>Reset</button>
        </>
      )}
    </div>
  );
}

export default UseRefDemo4StateFlipper;
