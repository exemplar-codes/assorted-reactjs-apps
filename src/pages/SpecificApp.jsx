import { Link, useParams } from "react-router-dom";
import AppList from "../Apps/AppList";

function SpecificApp() {
  const { appName } = useParams();

  return (
    AppList[appName]?.() || (
      <>
        <p>
          No app named <code>{appName}</code>.
        </p>
        <Link to="/apps">Go back</Link>
      </>
    )
  );
}

export default SpecificApp;
