import { useState } from "react";

function HTTPRequestWithTimeLimit() {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [requestTimeLimitExceeded, setRequestTimeLimitExceeded] =
    useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);
  useState(false);

  function getProfile() {
    setIsLoading(true);
    setRequestTimeLimitExceeded(false);
    setRequestSuccess(false);
    setTimeout(() => {
      setRequestSuccess((prevState) => {
        if (!prevState) setRequestTimeLimitExceeded(true);
        return prevState;
      });
      setIsLoading(false);
    }, 3000);
    fetch("https://api.github.com/users/sanjarcode")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setRequestTimeLimitExceeded((prevState) => {
            if (!prevState) {
              setData(data);
              setIsLoading(false);
              setRequestSuccess(true);
            }
            return prevState;
          });
        }, 1000);
      });
  }

  return (
    <>
      <button onClick={getProfile}>Load Data</button>
      <p>{requestTimeLimitExceeded && "Time limit exceeded, try again"}</p>
      <p>{loading && "Loading...2 seconds left..."}</p>
      <p>{!loading && data && requestSuccess && JSON.stringify(data)}</p>
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
