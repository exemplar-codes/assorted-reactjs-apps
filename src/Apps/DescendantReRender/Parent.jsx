import { useState } from "react";
import Child from "./Child";

// console.log(Parent.name + " file run");

function Parent({ count, setCount }) {
  console.log(Parent.name + " function run");
  const [s, t] = useState(() => console.log("Hook ran again"));
  return <Child count={count} setCount={setCount} />;
}

export default Parent;
