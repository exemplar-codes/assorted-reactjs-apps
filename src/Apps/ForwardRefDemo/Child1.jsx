import React from "react";
import Child2 from "./Child2";

const Child1 = React.forwardRef((props, ref) => <Child2 ref={ref} />);

export default Child1;
