import { useState } from "react";

function ComponentUpdatesInAction() {
  const [showParagraph, setShowParagraph] = useState();

  console.log("APP RUNNING");

  return (
    <>
      <h1>Hi there!</h1>
      <p>
        Learning: Component functions are re-run on state change, but the DOM
        only updates diffs, and does not-rerender everything
      </p>
      <button onClick={() => setShowParagraph((prevState) => !prevState)}>
        Toggle Paragraph
      </button>
      <p>{showParagraph && "This is new!"}</p>
    </>
  );
}

export default ComponentUpdatesInAction;
