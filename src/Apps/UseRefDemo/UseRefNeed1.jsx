import React, { useState } from "react";

import "./UseRefMain.css";

function UseRefNeed1() {
  const [showDisplay, setShowDisplay] = useState(false);
  const [enteredName, setEnteredName] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (document.getElementById("name-demo").value.length) {
      setEnteredName(document.getElementById("name-demo").value);

      toggleDisplay(); // show display

      document.getElementById("name-demo").value = "";
      // setEnteredName(""); // reset input field
    }
    console.log("Clicked");
  };

  const toggleDisplay = () => {
    setShowDisplay((prevDisplay) => !prevDisplay);
  };

  const resetHandler = () => {
    toggleDisplay();
    document.getElementById("name-demo").value = "";
  };

  return (
    <div className="use-ref-demo">
      <h1>Need</h1>
      <form onSubmit={onSubmitHandler} autoComplete="off">
        <label htmlFor="name-demo">Enter name</label> <br />
        <br />
        <input type="text" id="name-demo" />
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

export default UseRefNeed1;
