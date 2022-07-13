import { useState } from "react";

function MixedStateBatching() {
  // eslint-disable-next-line no-unused-vars
  const [count1, setCount1] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [count2, setCount2] = useState(0);

  console.log("Rendered");
  return (
    <>
      <p>Open the console</p>
      <p>
        Even though the click does two state changes of different state, the
        function is re-evaluated just once. Reason: chain of synchronous state
        updates are batched.
      </p>
      <button
        onClick={() => {
          (() => setCount1((prevCount) => prevCount + 1))();
          (() => setCount2((prevCount) => prevCount + 1))();
          //   setCount2((prevCount) => prevCount + 1);
        }}
      >
        Click me
      </button>
    </>
  );
}

export default MixedStateBatching;
