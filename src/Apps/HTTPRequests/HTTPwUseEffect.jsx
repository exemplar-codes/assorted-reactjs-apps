import { useState, useEffect } from "react";
function HTTPwUseEffect() {
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

  const dataSignature = JSON.stringify(data);
  // stringifying data object because it's non-primtive data type

  useEffect(getProfile, [dataSignature]); // fetch on first render itself
  // to avoid infinite renders

  return (
    <>
      <p>{loading && "Loading...2 seconds left..."}</p>
      <p>{!loading && data && JSON.stringify(data)}</p>
      {!loading && data && (
        <h2>Why use useEffect - if fetch is needed on App/Component load</h2>
      )}
    </>
  );
}

export default HTTPwUseEffect;
