import { useState } from "react";

function HTTPRequestWithTimeLimit() {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [requestTimeLimitExceeded, setRequestTimeLimitExceeded] =
    useState(false);

  const [causeTimeout, setCauseTimeout] = useState(true);

  function getProfile() {
    setIsLoading(true);
    setRequestTimeLimitExceeded(false);

    // Need to run both timer and fetch asynchronously. Stop if timer exceeds, or continue.
    // Solution make a new promise, and call reject if timer exceeds

    // We are using a timer for the fetch to, to simulate throttling
    // The issue is both run, which is bad behavior. i.e. we should clean the other timer if one runs
    // I'll clear both, if one of them has run, it would have already been cleared.
    let fetchTimer, limitTimer; // to keep track of the timers
    new Promise((resolve, reject) => {
      fetchTimer = setTimeout(
        () => {
          fetch("https://api.github.com/users/sanjarcode")
            .then((response) => response.json())
            .then((data) => {
              setData(data);
              setIsLoading(false);
              resolve(); // everything OK
            });
        },
        causeTimeout ? 2000 : 500
      );

      limitTimer = setTimeout(
        () => {
          reject(new Error("Time Limit Exceeded"));
        },
        causeTimeout ? 1000 : 2000
      );
    })
      .catch(() => setRequestTimeLimitExceeded(true))
      .finally(() => {
        clearTimeout(limitTimer);
        clearTimeout(fetchTimer);
        setIsLoading(false);
      });
  }

  return (
    <>
      <p>
        {(causeTimeout ? "Cause" : "Avoid") + " time out"} &nbsp;
        <button onClick={() => setCauseTimeout((prev) => !prev)}>Toogle</button>
      </p>
      <button onClick={getProfile}>Load Data</button>
      <p>{requestTimeLimitExceeded && "Time limit exceeded, try again"}</p>
      <p>{loading && "Loading...2 seconds left..."}</p>
      <p>
        {!loading && data && !requestTimeLimitExceeded && JSON.stringify(data)}
      </p>
      {!loading && data && (
        <h2>
          Create a 'void' new promise and run both fetch and timer. Resolve
          inside fetch, reject with an error inside timer. In the catch block of
          this void promise, set timeLimitExceededState to true. And in the
          finally block, clear the timer using window.clearTimeout (so it's not
          run if fetch is successful)
          <br />
          Wrap this void promise in a function and call it inside useEffect or
          as a user event callback.
          <br />
          <a href="https://stackoverflow.com/a/53350139/11392807">
            Inspiration
          </a>
          <br />
          Of course, one can avoid this hassle by using the Axios HTTP library.
          It takes in a max time limit.
        </h2>
      )}
    </>
  );
}

export default HTTPRequestWithTimeLimit;
