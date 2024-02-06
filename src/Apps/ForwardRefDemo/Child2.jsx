import React from "react";
import Child3 from "./Child3";

const Child2 = React.forwardRef((props, ref) => <Child3 ref={ref} />);

export default Child2;
