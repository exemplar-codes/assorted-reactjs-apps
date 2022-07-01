import { useState } from "react";
import Parent from "./Parent";

console.log(DescendantReRender.name + " file run");

function DescendantReRender() {
  console.log(DescendantReRender.name + " function run");
  const [count, setCount] = useState(0);
  return (
    <>
      <Parent count={count} setCount={setCount} />
      <h2>Situation</h2>
      <p>
        How does state (and context) work for the descendent components? By
        this, I mean what happens to state of the descendent component when the
        parent's state changes, does their `useState` statement run again, or is
        anything preserved? This is really confusing for me. Example: There was
        a descendant using a context, and the context changed. I had a
        `console.log` in this component to monitor re-renders, but it never ran
        after the first time, which is strange since the context changed, and
        all descendants should be re-render. Does re-render not mean that the
        component function/file is ran again? FIXME: how do descendant
        re-renders work?
      </p>
      <h2>Observations/Answers</h2>
      <p>
        Okay here are the observations:
        <ol>
          <li>
            Files are never re-run on render. Yeah, it doesn't make sense.
          </li>
          <li>Component functions are run again on re-render.</li>
          <li>
            Hooks are NOT run again, even if the re-render is caused by an
            ancestor.
          </li>
        </ol>
        This means that a de-hooked copy of the function is kept in memory at
        all times.
      </p>
    </>
  );
}

export default DescendantReRender;
