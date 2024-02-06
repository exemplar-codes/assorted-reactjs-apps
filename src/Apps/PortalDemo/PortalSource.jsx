import React from "react";
import ReactDOM from "react-dom";

// this code changes to specify HTML placement
function PortalSource({ val }) {
  return ReactDOM.createPortal(
    <div style={{ color: val ? "red" : "black" }}>B</div>,
    document.getElementById("portal")
  );
}
export default PortalSource;
