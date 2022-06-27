import React from "react";

import HelloWorld from "./HelloWorld/HelloWorld";
import Calculator from "./Calculator/Calculator";
// import ReactHooksCheck from "./ReactHooksCheck/ReactHooksCheck";
import TimerUsingHook from "./TimerUsingHook/TimerUsingHook";
import MultiStateMulti from "./MultipleStates/MultiStateMulti";
import MultiStateSingle from "./MultipleStates/MultiStateSingle";
import Parent2ChildComm from "./Parent2ChildComm/Parent2ChildComm";
import ReactClock from "./ReactClock/ReactClock";
import StyledComponentsDemo from "./StyledComponentsDemo/StyledComponentsDemo";
// import OddEvenInput from "./OddEvenInput/OddEventInput";
import PortalOut from "./PortalDemo/PortalOut";
import UseRefMain from "./UseRefDemo/UseRefMain";
import UseReducerDemo from "./UseReducerDemo/UseReducerDemo";
import AddButtonPill from "./AddButtonPill/AddButtonPillMain";
import ForwardRefDemoRoot from "./ForwardRefDemo/ForwardRefDemoRoot";

const Apps = {
  HelloWorld: HelloWorld,
  Calculator: Calculator,
  // ReactHooksCheck: ReactHooksCheck,
  TimerUsingHook: TimerUsingHook,
  MultiStateSingle: MultiStateSingle,
  MultiStateMulti: MultiStateMulti,
  Parent2ChildComm: Parent2ChildComm,
  ReactClock: ReactClock,
  StyledComponentsDemo: StyledComponentsDemo,
  // OddEvenInput: OddEvenInput,
  PortalOut: PortalOut,
  UseRefMain: UseRefMain,
  UseReducerDemo: UseReducerDemo,
  AddButtonPill: AddButtonPill,
  ForwardRefDemoRoot: ForwardRefDemoRoot,
};

function navigateTo(pathname) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  return false;
}

function AppList() {
  const showList = window.location.pathname === "/";
  return (
    <>
      <h1>Assorted React Apps</h1>
      {/* render the list or render the view */}
      {showList ? (
        <List />
      ) : (
        <ViewApp route={`${window.location.pathname.replace("/", "")}`} />
      )}
    </>
  );
}

function ViewApp({ route }) {
  const App = Apps[route];
  return (
    <>
      <h2>{route}</h2>
      {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="" onClick={() => navigateTo("/")}>
          Back to List
        </a>
      }
      <br />
      <hr />
      <App />
    </>
  );
}

function List() {
  return (
    <ol>
      {Object.keys(Apps).map((AppName) => (
        <li key={AppName} style={{ padding: "5px" }}>
          {
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a onClick={() => navigateTo(`/${AppName}`)} href="">
              {AppName}
            </a>
          }
        </li>
      ))}
    </ol>
  );
}

export default AppList;
