import { useState, useMemo } from "react";
import ExpensiveChild from "./Child";

function generateArray() {
  return Array(5)
    .fill()
    .map(() => Math.floor(Math.random() * 100));
}

function UseMemoWithChild() {
  console.log("Parent re-evaluated");
  const [count, setCount] = useState(1);
  const [version, setVersion] = useState(false);
  const [bothClicked, setBothClicked] = useState([false, false]);

  const list = generateArray();

  const memoList = useMemo(generateArray, []);

  return (
    <>
      <h4>Keep JS console open</h4>
      <h2>Renders: {count}</h2>
      <ExpensiveChild list={version ? memoList : list} />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
        style={{ userSelect: "none" }}
      >
        Re-render
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          setBothClicked((prev) =>
            version ? [true, prev[1]] : [prev[0], true]
          );
          setVersion((prev) => !prev);
        }}
      >
        Switch to {!version ? "correct" : "wrong"} version
      </button>
      {bothClicked.every((_) => _) && (
        <h2>
          Result: Use useMemo in sender as well as receiver for data props
        </h2>
      )}
    </>
  );
}

export default UseMemoWithChild;
