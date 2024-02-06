import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  /*
  why: to run 'code' at different life-cycle of a component instance
    - ON: after render or componentDidMount (old)
    - Refresh: when updated or componentDidUpdate
    - OFF: just after removal or componentWillUnmount
    Note: Everything is after, knowing before is impossible

  how: uses eventListeners on values and triggers drawer function.

  what:
  - useState provides with a read variable
  - this is like C langs static of method, so it's saved between
    the component instances function calls
  - additionally, if this value (state) changes,
    the component is re - rendered with the updated value.

  syntactically
  - it needs an initial value.
  - provides a read value (of the state) and a setter method
  - useState is a core React feature, so easy to import.

  For more than one state, one may use multiple state variables
  or use a single object (keep in mind to update properly).
  */

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`After refresh, count: ${count}`); // on refresh?

    // return () => {
    //   console.log(`After removal, ${count}`); // after OFF
    // };
  }, [count]); // state(s)

  const onClickHandler = () => setCount(count + 1);
  // what's this
  // add by 1 when clicked
  // this will re-render the button too, as we are 'setting' state.

  // a button that counts integers
  return <button onClick={onClickHandler}>{count}</button>;
};

export default HookUseEffect;
