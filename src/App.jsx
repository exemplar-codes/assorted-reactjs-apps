import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppsList from "./pages/AppsList";
import Home from "./pages/Home";
import InvalidLinkPage from "./pages/InvalidLink";
import SpecificApp from "./pages/SpecificApp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
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
