import React, { useState } from "react";
import PortalSource from "./PortalSource";

function PortalOut() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked((prevClicked) => !prevClicked);
  };
  return (
    <>
      <PortalSource val={clicked} />
      <div>
        <button onClick={clickHandler}>Click me</button>
      </div>
      {/* JSX code remains where it is */}
    </>
  );
}

export default PortalOut;
