import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AppsList from "./pages/AppsList";
import InvalidLinkPage from "./pages/InvalidLink";
import SpecificApp from "./pages/SpecificApp";

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<Navigate to="/apps" />} />

        <Route path="/apps/:appName" element={<SpecificApp />} />
        <Route path="/apps" element={<AppsList />} />
        <Route path="*" element={<InvalidLinkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
