import React, { useState } from "react";

import Child from "./Child";

function Parent() {
  const [vari, setVari] = useState("Ready to receive...");

  return (
    <div>
      {vari} <Child sendToParent={setVari} />
    </div>
  );
}

export default Parent;
