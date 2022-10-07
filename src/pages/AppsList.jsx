import { Link } from "react-router-dom";
import AppList from "../Apps/AppList";

function AppsList() {
  return (
    <div>
      <ol>
        {Object.keys(AppList).map((appName) => (
          <li key={appName}>
            <Link to={`apps/${appName}`}>{appName}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AppsList;
