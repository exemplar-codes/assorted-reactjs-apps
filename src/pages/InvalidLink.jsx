import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

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
      {!disable && redirect && <Redirect to="/apps" />}
    </div>
  );
}

export default InvalidLinkPage;
