import { useEffect, useState } from "react";

function DebouncedTextInput() {
  const [enteredInput, setEnteredInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formFirstLoad, setFormFirstLoad] = useState(true);
  const [isInputValid, setIsInputValid] = useState(false);

  const onInputChangeHandler = (event) => {
    setEnteredInput(() => {
      console.log(event.target.value);
      return event.target.value;
    });
    setIsInputValid(event.target.value.trim() === event.target.value);
  };

  useEffect(() => {
    if (!formFirstLoad && isInputValid) {
      const timer = setTimeout(() => {
        console.log(`Request with payload {${enteredInput.trim()}} made`);
        setIsLoading(true);

        // hide loading on request success
        setTimeout(() => {
          setIsLoading(false);
        }, Math.floor(500 * (1 + Math.random())));
      }, 300);

      return () => clearTimeout(timer);
    } else setFormFirstLoad(false);
  }, [enteredInput]);

  return (
    <>
      <label>Debounced Input</label>&nbsp;
      <input
        type="text"
        onChange={onInputChangeHandler}
        value={enteredInput}
        placeholder="Enter text"
      />
      {isLoading && <em>&nbsp;Loading...</em>}
    </>
  );
}

export default DebouncedTextInput;
