import React, { useState } from "react";

import "./UseRefMain.css";

// compared to src/Apps/UseRefDemo/UseRefDemo.jsx
// to avoid long lines of ugly code
// need accessor
// need mutator
// we are using #selectorPath here, but it could be
// indicated by the element itself. No CSS/id needed

function useRefHook(queryPath) {
  const accessor = () => {
    return document.querySelector(queryPath);
  };

  function mutator(name, value) {
    document.querySelector(queryPath)[name] = value;
  }

  return [accessor, mutator];
}

function UseRefDerivation2() {
  const [showDisplay, setShowDisplay] = useState(false);
  const [enteredName, setEnteredName] = useState("");

  const [accessor, mutator] = useRefHook("#name-why");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (accessor().value.length) {
      setEnteredName(accessor().value);

      toggleDisplay(); // show display

      mutator("value", "");
      // setEnteredName(""); // reset input field
    }
    console.log("Clicked");
  };

  const toggleDisplay = () => {
    setShowDisplay((prevDisplay) => !prevDisplay);
  };

  const resetHandler = () => {
    toggleDisplay();
    mutator("value", "");
  };

  return (
    <div className="use-ref-demo">
      <h1>Derivation</h1>
      <form onSubmit={onSubmitHandler} autoComplete="off">
        <label htmlFor="name-why">Enter name</label> <br />
        <br />
        <input type="text" id="name-why" />
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

export default UseRefDerivation2;
