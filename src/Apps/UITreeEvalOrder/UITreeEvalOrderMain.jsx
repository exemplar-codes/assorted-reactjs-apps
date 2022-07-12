import { useState } from "react";

import uitree from "./uitree.svg";

import AllInOneFileDemo from "./AllInOneFileDemo";
import SplittedFileDemo from "./SplittedFileDemo";

function UITreeEvalOrder() {
  const [component, setComponent] = useState("");
  const [demoClicked, setDemoClicked] = useState([false, false]);

  let chosenComponent;
  switch (component) {
    case "all-in-one":
      chosenComponent = <AllInOneFileDemo />;
      break;
    case "splitted-file":
      chosenComponent = <SplittedFileDemo />;
      break;

    default:
      chosenComponent = <p>Nothing selected!</p>;
  }

  return (
    <>
      <h4>Keep JS console open and cleared</h4>
      <figure style={{ textAlign: "center", width: "fit-content" }}>
        <img src={uitree} alt="ui-tree" />
        <figcaption>UI tree</figcaption>
      </figure>

      <div>
        Select a demo&nbsp;
        <button
          onClick={() => {
            setComponent("all-in-one");
            setDemoClicked((prevDemoClicked) => [true, prevDemoClicked[1]]);
          }}
          style={component === "all-in-one" ? { fontWeight: "bold" } : {}}
        >
          All In One
        </button>
        &nbsp;
        <button
          onClick={() => {
            setComponent("splitted-file");
            setDemoClicked((prevDemoClicked) => [prevDemoClicked[0], true]);
          }}
          style={component === "splitted-file" ? { fontWeight: "bold" } : {}}
        >
          Splitted File
        </button>
      </div>
      {chosenComponent}
      {demoClicked.every((_) => _ === true) && (
        <>
          <h2>Result: Both evaluate in a pre-order traversal fashion</h2>
          Anecdote: I was asked about this in a React interview, I guessed it
          correctly!
        </>
      )}
    </>
  );
}

export default UITreeEvalOrder;
