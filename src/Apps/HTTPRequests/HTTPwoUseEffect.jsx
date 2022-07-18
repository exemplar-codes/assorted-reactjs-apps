import { useState } from "react";
function HTTPwoUseEffect() {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);

  function getProfile() {
    setIsLoading(true);
    fetch("https://api.github.com/users/sanjarcode")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setData(data);
          setIsLoading(false);
        }, 2000);
      });
  }

  return (
    <>
      <button onClick={getProfile}>Load Data</button>
      <p>{loading && "Loading...2 seconds left..."}</p>
      <p>{!loading && data && JSON.stringify(data)}</p>
      {!loading && data && (
        <h2>
          Reason there's no need for useEffect - the HTTP request was triggered
          manually and not on page load
        </h2>
      )}
    </>
  );
}

export default HTTPwoUseEffect;
