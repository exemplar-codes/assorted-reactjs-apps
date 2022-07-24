import { useState, useEffect } from "react";

const useCounter = (stateMutationLogic, dependOnCallback, text) => {
  const [count, setCount] = useState(0);

  console.log("Counter hook called", text);

  const callbackDependency = dependOnCallback && stateMutationLogic;
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(stateMutationLogic);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, callbackDependency]);

  return count;
};

export default useCounter;
