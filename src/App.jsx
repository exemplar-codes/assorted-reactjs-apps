import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppsList from "./pages/AppsList";
import Home from "./pages/Home";
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
          <Redirect to="/apps" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
