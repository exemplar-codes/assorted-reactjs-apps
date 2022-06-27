import React from "react";

const Child3 = React.forwardRef((props, ref) => {
  return (
    <>
      <label>Input</label>
      {"  "}
      <input type="text" ref={ref} />
    </>
  );
});

export default Child3;
