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
import DescendantReRender from "./DescendantReRender/DescendantReRender";
import ComponentUpdatesInAction from "./ComponentUpdatesInAction/ComponentUpdatesInAction";
import ComponentStateBridge from "./ComponentStateBridge/ComponentStateBridge";
import MixedStateBatching from "./MixedStateBatching/MixedStateBatching";
import UITreeEvalOrder from "./UITreeEvalOrder/UITreeEvalOrderMain";
import UseMemoDemo from "./UseMemoDemo/UseMemoDemo";
import UseMemoWithChild from "./UseMemoWithChild/UseMemoWithChild";
import HTTPRequestsMain from "./HTTPRequests/HTTPRequestsMain";

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
  { componentName: "DescendantReRender", Component: DescendantReRender },
  {
    componentName: "ComponentUpdatesInAction",
    Component: ComponentUpdatesInAction,
  },
  {
    componentName: "ComponentStateBridge",
    Component: ComponentStateBridge,
  },
  {
    componentName: "MixedStateBatching",
    Component: MixedStateBatching,
  },
  {
    componentName: "UITreeEvalOrder",
    Component: UITreeEvalOrder,
  },
  {
    componentName: "UseMemoDemo",
    Component: UseMemoDemo,
  },
  { componentName: "UseMemoWithChild", Component: UseMemoWithChild },
  { componentName: "HTTPRequestsMain", Component: HTTPRequestsMain },
  // Add new app here
];

function navigateTo(pathname) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
}

function AppList() {
  // const showList = window.location.pathname === "/";

  const [place, setPlace] = useState(window.location.pathname);
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
    (appEntry) => appEntry["componentName"] === route
  )?.Component;

  return (
    <>
      <h2>{App && route}</h2>
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
      {App ? <App /> : "Invalid route"}
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
