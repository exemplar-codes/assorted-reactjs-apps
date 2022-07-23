import { useEffect, useState } from "react";
import useCounter from "./use-counter";

function CustomHookDemoCounter() {
  const [mode, setMode] = useState(true);

  return (
    <>
      <h1>{mode > 0 ? "Using Custom Hook" : "Using Higher Order Component"}</h1>
      <button onClick={() => setMode((prevState) => !prevState)}>Toggle</button>
      <br />
      <br />
      {mode ? <MainWithHook /> : <MainHOC />}
      <h2>
        Both counters have a common same logic - they keep updating their state
        every 1 second. But state update logic is different. Ignore the negative
        vs positive similarities, assume they are completely unrelated state
        changes.
        <br />
        <br />
        We can separate out this per second timer into a function, which of
        course, updates the state as per the input rule.
      </h2>
    </>
  );
}

function MainWithHook() {
  return (
    <>
      <ForwardWithHook />
      <br />
      <BackwardWithHook />
    </>
  );
}

function ForwardWithHook() {
  const countForward = useCounter((prevState) => prevState + 1);
  return <UIContent count={countForward} />;
}

function BackwardWithHook() {
  const countBackward = useCounter((prevState) => prevState - 1);
  return <UIContent count={countBackward} />;
}

function MainHOC() {
  return (
    <>
      <RefreshingButtonHOC stateMutationLogic={(prevState) => prevState + 1} />
      <br />
      <RefreshingButtonHOC stateMutationLogic={(prevState) => prevState - 1} />
    </>
  );
}

function RefreshingButtonHOC({ stateMutationLogic }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(stateMutationLogic);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [count, stateMutationLogic]);

  return <UIContent count={count} />;
}

function UIContent({ count }) {
  return (
    <div
      style={{
        backgroundColor: count > 0 ? "lightcoral" : "skyblue",
        width: "50px",
        fontSize: "32px",
        textAlign: "center",
      }}
    >
      {count > 0 ? <>&nbsp;</> : ""}
      {count}
    </div>
  );
}

export default CustomHookDemoCounter;
