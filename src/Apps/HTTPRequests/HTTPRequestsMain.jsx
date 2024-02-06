import { useState } from "react";

import HTTPwoUseEffect from "./HTTPwoUseEffect";
import HTTPwUseEffect from "./HTTPwUseEffect";

function HTTPRequestsMain() {
  const [withUseEffect, setWithUseEffect] = useState(false);
  return (
    <>
      <button onClick={() => setWithUseEffect((prev) => !prev)}>Toggle</button>
      <hr />
      <h2>{!withUseEffect ? "Without" : "With"} useEffect</h2>
      {withUseEffect ? <HTTPwUseEffect /> : <HTTPwoUseEffect />}
    </>
  );
}

export default HTTPRequestsMain;
