import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "./App";

describe("renders that the app", () => {
  it("is main loader", () => {
    render(<App />);
    const loader = screen.queryByText("I'm the app loader");
    expect(loader).toBeInTheDocument();
  });
});
