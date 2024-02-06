import { useEffect, useRef } from "react";

function HTTPRequestWithRef() {
  const dataRef = useRef();
  function getProfile() {
    fetch("https://api.github.com/users/sanjarcode")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          dataRef.current.innerText = JSON.stringify(data);
        }, 2000);
      });
  }

  useEffect(getProfile); // runs once on first render, causes no re-renders

  return (
    <>
      <p ref={dataRef}>Loading...</p>
      <h2>
        HTTP Request with useEffect but no state. Using refs to update DOM on
        request success.
        <br />
        <br />
        This is not desirable and should be avoided, because:
        <ul>
          <li>
            Showing loading state is impossible without state, atleast for user
            triggered requests
          </li>
          <li>And not having loading state is really bad UX</li>
        </ul>
      </h2>
    </>
  );
}

export default HTTPRequestWithRef;
