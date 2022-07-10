import { useState } from "react";
import Child from "./Child";

function ComponentStateBridge() {
  const [show, setShow] = useState(false);
  return (
    <>
      <p>
        Conditional rendering remounts the second button, so it's state is
        reset.
      </p>
      <p>
        The first button maintains it's state even when the root component
        re-evaluates/re-renders
      </p>
      <button onClick={() => setShow((prev) => !prev)}>Toogle 2nd</button>
      <br /> <br />
      <Child /> {show && <Child />}
    </>
  );
}

export default ComponentStateBridge;
