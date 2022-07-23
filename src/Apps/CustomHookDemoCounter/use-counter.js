import { useState, useEffect } from "react";

const useCounter = (stateMutationLogic) => {
  const [count, setCount] = useState(0);

  console.log("Counter hook called");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(stateMutationLogic);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, stateMutationLogic]);

  return count;
};

export default useCounter;
