import { useState } from "react";

function Child() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>;
}

export default Child;
