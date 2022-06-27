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

const Apps = [
  { name: "HelloWorld", Component: HelloWorld },
  { name: "Calculator", Component: Calculator },
  // { name: "ReactHooksCheck", Component: ReactHooksCheck },
  { name: "TimerUsingHook", Component: TimerUsingHook },
  { name: "MultiStateSingle", Component: MultiStateSingle },
  { name: "MultiStateMulti", Component: MultiStateMulti },
  { name: "Parent2ChildComm", Component: Parent2ChildComm },
  { name: "ReactClock", Component: ReactClock },
  { name: "StyledComponentsDemo", Component: StyledComponentsDemo },
  // { name: "OddEvenInput", Component: OddEvenInput },
  { name: "PortalOut", Component: PortalOut },
  { name: "UseRefMain", Component: UseRefMain },
  { name: "UseReducerDemo", Component: UseReducerDemo },
  { name: "AddButtonPill", Component: AddButtonPill },
  { name: "ForwardRefDemoRoot", Component: ForwardRefDemoRoot },
];

function AppList() {
  return (
    <>
      <h1>List of React apps</h1>
      <ol>
        {Apps.map((App) => (
          <li>
            {App.name}: <App.Component />
          </li>
        ))}
      </ol>
    </>
  );
}

export default AppList;
