import { useState } from "react";
import useCounter from "./use-counter";

function CustomHookDemoCounter() {
  const [useDependency, setUseDependency] = useState(false);

  return (
    <>
      <h1>{!useDependency ? <em>Not&nbsp;</em> : ''}{'using callback in useEffect dependency'}</h1>
      <button onClick={() => setUseDependency((prevState) => !prevState)}>Toggle</button>
      <br />
      <br />
      <MainWithHook useDependency={useDependency}/>
      <h2>
        All counters have common logic - they keep updating their state
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

function MainWithHook({useDependency}) {
  const countForward = useCounter((prevState) => prevState + 1, useDependency, "1");
  const countBackward = useCounter((prevState) => prevState - 1, useDependency, "2");
  const countForwardx = useCounter((prevState) => prevState + 1, useDependency, "3");
  const countBackwardx = useCounter((prevState) => prevState - 1, useDependency, "4");
  const countForwardy = useCounter((prevState) => prevState + 1, useDependency, "5");
  const countBackwardy = useCounter((prevState) => prevState - 1, useDependency, "6");
  const countForwardz = useCounter((prevState) => prevState + 1, useDependency, "7");
  const countBackwardz = useCounter((prevState) => prevState - 1, useDependency, "8");

  return (
    <>
      <UIContent count={countForward} />
      <br />
      <UIContent count={countBackward} />
      <br /> <UIContent count={countForwardx} />
      <br /> <UIContent count={countBackwardx} />
      <br /> <UIContent count={countForwardy} />
      <br /> <UIContent count={countBackwardy} />
      <br /> <UIContent count={countForwardz} />
      <br /> <UIContent count={countBackwardz} />
    </>
  );
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
