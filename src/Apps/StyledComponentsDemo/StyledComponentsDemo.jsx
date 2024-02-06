import React from "react";
import Div from "./Div";

function StyledComponentsDemo() {
  return (
    <Div>
      OuterMost
      <Div>
        Outer
        <Div>Inner</Div>
      </Div>
    </Div>
  );
}

export default StyledComponentsDemo;
