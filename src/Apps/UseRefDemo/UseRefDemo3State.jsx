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

function UseRefDemo3State() {
  const [enteredName, setEnteredName] = useState("");

  const nameRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (nameRef.current.value.length) {
      setEnteredName(nameRef.current.value); // flips the display ON and displays name
      nameRef.current.value = ""; // empty the input
    }
  };

  const resetHandler = () => {
    setEnteredName(""); // flip the display OFF

    nameRef.current.value = ""; // clear the input
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
      {Boolean(enteredName) && (
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

export default UseRefDemo3State;
