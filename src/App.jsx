import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppsList from "./pages/AppsList";
import InvalidLinkPage from "./pages/InvalidLink";
import SpecificApp from "./pages/SpecificApp";

function App() {
  return (
    <BrowserRouter basename="/assorted-reactjs-apps">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/apps" />
        </Route>
        <Route path="/apps/:appName">
          <SpecificApp />
        </Route>
        <Route path="/apps">
          <AppsList />
        </Route>
        <Route path="*">
          <InvalidLinkPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
