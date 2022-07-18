import { useState } from "react";

function HTTPRequestWithTimeLimit() {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [requestTimeLimitExceeded, setRequestTimeLimitExceeded] =
    useState(false);

  function getProfile() {
    setIsLoading(true);
    setRequestTimeLimitExceeded(false);

    // Need to run both timer and fetch asynchronously. Stop if timer exceeds, or continue.
    // Solution make a new promise, and call reject if timer exceeds
    new Promise((resolve, reject) => {
      fetch("https://api.github.com/users/sanjarcode")
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            setData(data);
            setIsLoading(false);
            resolve(); // everything OK
          }, 1000);
        });

      setTimeout(() => {
        reject(new Error("Time Limit Exceeded"));
      }, 300);
    })
      .catch(() => setRequestTimeLimitExceeded(true))
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <button onClick={getProfile}>Load Data</button>
      <p>{requestTimeLimitExceeded && "Time limit exceeded, try again"}</p>
      <p>{loading && "Loading...2 seconds left..."}</p>
      <p>
        {!loading && data && !requestTimeLimitExceeded && JSON.stringify(data)}
      </p>
      {!loading && data && (
        <h2>
          Reason there's no need for useEffect - the HTTP request was triggered
          manually and not on page load
        </h2>
      )}
    </>
  );
}

export default HTTPRequestWithTimeLimit;
