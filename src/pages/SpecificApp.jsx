import { Link, useParams } from "react-router-dom";
import AppList from "../Apps/AppList";
import InvalidLinkPage from "./InvalidLink";

function SpecificApp() {
  const { appName } = useParams();

  return AppList[appName]?.() || <InvalidLinkPage />;
}

export default SpecificApp;
