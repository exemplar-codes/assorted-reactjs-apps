import { useState, useMemo } from "react";

function ExpensiveChild(props) {
  console.log("Child re-evaluated");
  const [expensiveComputationsCount, setExpensiveComputationsCount] =
    useState(0);

  const sortedList = useMemo(() => {
    console.log("Expensive computation RAN");
    setExpensiveComputationsCount((prevCount) => prevCount + 1);
    return props.list.map((_, i) => <li key={i}> {_}</li>);
  }, [props.list]);

  return (
    <>
      <h2>Expensive computations: {expensiveComputationsCount}</h2>
      <ul>{sortedList}</ul>
    </>
  );
}

export default ExpensiveChild;
