import { useState, useMemo } from "react";

function UseMemoDemo() {
  console.log("Component re-evaluated");
  const [count, setCount] = useState(1);
  const [expensiveComputationsCount, setExpensiveComputationsCount] =
    useState(0);
  const [voidComputationsCount, setVoidComputationsCount] = useState(0);

  const sortedList = useMemo(() => {
    console.log("Expensive computation RAN");
    setExpensiveComputationsCount((prevCount) => prevCount + 1);
    return Array(5)
      .fill()
      .map((_) => <li key={_}> {Math.floor(Math.random() * 100)}</li>);
  }, []);

  useMemo(() => {
    console.log("Void expensive RAN");
    setVoidComputationsCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <h4>Keep JS console open</h4>
      <h2>Renders: {count}</h2>
      <h2>Expensive computations: {expensiveComputationsCount}</h2>
      <h2>Void Expensive computations: {voidComputationsCount}</h2>
      <ul>{sortedList}</ul>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        style={{ userSelect: "none" }}
      >
        Re-render
      </button>
    </>
  );
}

export default UseMemoDemo;
