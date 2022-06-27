import React from "react";
import ReactDOM from "react-dom";

import AppList from "./Apps/AppList";
import CurrentApp from "./Apps/CurrentApp";

const live = window.location.hostname !== "localhost";

ReactDOM.render(
  <React.StrictMode>{!live ? <CurrentApp /> : <AppList />}</React.StrictMode>,
  document.getElementById("root")
);
