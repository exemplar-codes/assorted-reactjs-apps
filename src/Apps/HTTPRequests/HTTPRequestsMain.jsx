import { useState } from "react";

import HTTPwoUseEffect from "./HTTPwoUseEffect";
import HTTPwUseEffect from "./HTTPwUseEffect";

function HTTPRequestsMain() {
  const [withUseEffect, setWithUseEffect] = useState(false);
  return (
    <>
      <button onClick={() => setWithUseEffect((prev) => !prev)}>
        {withUseEffect ? "Without" : "With"} useEffect
      </button>
      <hr />
      {withUseEffect ? <HTTPwUseEffect /> : <HTTPwoUseEffect />}
    </>
  );
}

export default HTTPRequestsMain;
