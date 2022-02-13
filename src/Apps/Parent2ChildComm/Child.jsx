import React from "react";

function Child({ sendToParent }) {
  const clickHandler = () => {
    sendToParent(Math.floor(Math.random() * 100));
  };

  return <button onClick={clickHandler}>Send</button>;
}

export default Child;
