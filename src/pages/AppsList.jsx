import { Link } from "react-router-dom";
import AppList from "../Apps/AppList";

function AppsList() {
  return (
    <div>
      <h1>Assorted React Apps</h1>
      <ol>
        {Object.keys(AppList).map((appName) => (
          <li key={appName}>
            <Link to={appName}>{appName}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AppsList;
