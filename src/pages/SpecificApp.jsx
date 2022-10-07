import { useParams } from "react-router-dom";
import AppList from "../Apps/AppList";

function SpecificApp() {
  const { appName } = useParams();

  return AppList[appName]?.();
}

export default SpecificApp;
