import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("should render layout", () => {
    render(<App />);

    const layout = screen.getByTestId("layout-test");
    expect(layout).toBeInTheDocument();
  });
});
