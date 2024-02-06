import React, { useRef } from "react";
import Child1 from "./Child1";

// demonstration of forward refs at multiple level depth
function ForwardRefDemoRoot() {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    alert(inputRef.current.value || "Empty input");
  };

  return (
    <form onSubmit={onSubmit}>
      {/* First ref code is same as for HTML element, but all relevant
      components down the chain have to use React/forwardRef */}
      <Child1 ref={inputRef} />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default ForwardRefDemoRoot;
