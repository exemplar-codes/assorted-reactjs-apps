import React, { useState } from "react";

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

const Apps = [
  { componentName: "HelloWorld", Component: HelloWorld },
  { componentName: "Calculator", Component: Calculator },
  // { componentName: "ReactHooksCheck", Component: ReactHooksCheck },
  { componentName: "TimerUsingHook", Component: TimerUsingHook },
  { componentName: "MultiStateSingle", Component: MultiStateSingle },
  { componentName: "MultiStateMulti", Component: MultiStateMulti },
  { componentName: "Parent2ChildComm", Component: Parent2ChildComm },
  { componentName: "ReactClock", Component: ReactClock },
  { componentName: "StyledComponentsDemo", Component: StyledComponentsDemo },
  // { componentName: "OddEvenInput", Component: OddEvenInput },
  { componentName: "PortalOut", Component: PortalOut },
  { componentName: "UseRefMain", Component: UseRefMain },
  { componentName: "UseReducerDemo", Component: UseReducerDemo },
  { componentName: "AddButtonPill", Component: AddButtonPill },
  { componentName: "ForwardRefDemoRoot", Component: ForwardRefDemoRoot },
];

function navigateTo(pathname) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
}

function AppList() {
  // const showList = window.location.pathname === "/";

  const [place, setPlace] = useState("/");
  const showList = place === "/" || place === "/assorted-reactjs-apps";

  return (
    <>
      <h1>Assorted React Apps</h1>
      {/* render the list or render the view */}
      {showList ? (
        <List setPlace={setPlace} />
      ) : (
        <ViewApp setPlace={setPlace} route={`${place.replace("/", "")}`} />
      )}
    </>
  );
}

function ViewApp({ route, setPlace }) {
  const App = Apps.find(
    ({ componentName }) => componentName === route
  ).Component;

  return (
    <>
      <h2>{route}</h2>
      {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="#"
          onClick={() => {
            navigateTo("/");
            setPlace("/");
          }}
        >
          Back to List
        </a>
      }
      <br />
      <hr />
      <App />
    </>
  );
}

function List({ setPlace }) {
  return (
    <ol>
      {Apps.map(({ componentName: AppName }) => (
        <li key={AppName} style={{ padding: "5px" }}>
          {
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              onClick={() => {
                navigateTo(`/${AppName}`);
                setPlace(`/${AppName}`);
              }}
              href="#"
            >
              {AppName}
            </a>
          }
        </li>
      ))}
    </ol>
  );
}

export default AppList;
