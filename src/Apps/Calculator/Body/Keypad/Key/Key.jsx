import React from "react";

import "./Key.css";

const Key = ({ number }) => {
  return <div className="key-border key-inside">{9 - number}</div>;
};

export default Key;
