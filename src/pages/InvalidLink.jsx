import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function InvalidLinkPage({ disable = false, timeout = 5 }) {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, timeout * 1000);
  }, []);

  return (
    <div>
      <h1>404</h1>
      {!disable && <p>Redirecting in {timeout} seconds...</p>}
      <Link to="/apps">Go back</Link>
      {/* Redirect component is absent from react router v2, need to refactor this */}
      {!disable && redirect && <Navigate to="/apps" />}
    </div>
  );
}

export default InvalidLinkPage;
