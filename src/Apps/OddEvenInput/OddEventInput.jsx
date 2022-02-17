import React, { useState } from "react";

import "./OddEvenInput.css";

function OddEvenInput() {
  let [enteredInput, setEnteredInput] = useState("");

  let setEnteredInputHandler = (event) => {
    setEnteredInput(event.target.value); // to record the input to state
  };

  let onSubmitHandler = (event) => {
    event.preventDefault();

    // resetting the value
    setEnteredInput("");
  };

  let toNonNegativeString = (numberString) => {
    if (numberString.length === 0) return numberString;

    let number = Number(numberString);
    if (number < 0) number = -number;

    return number.toString();
  };
  // make odd input red, even input blue, but keep them stringed
  return (
    <div>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="number"
          value={enteredInput}
          onChange={setEnteredInputHandler}
        />
        <div></div>
        &nbsp;
        <div class="inputs-output">
          {toNonNegativeString(enteredInput)
            .split("")
            .map((numChar) => (
              <span style={{ color: Number(numChar) % 2 ? "red" : "blue" }}>
                {numChar}
              </span>
            ))}
        </div>
        <input type="submit" value="Submit/Press Enter" />
      </form>
    </div>
  );
}

export default OddEvenInput;
