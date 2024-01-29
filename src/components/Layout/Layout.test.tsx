import { render, screen } from "@testing-library/react";
import Layout from ".";

describe("Layout", () => {
  it("should render without crashing", () => {
    render(<Layout children />);
  });

  it("should render navbar", () => {
    render(<Layout children />);

    const navBar = screen.getByTestId("navbar-test");
    expect(navBar).toBeInTheDocument();
  });

  it("should render children landing page", () => {
    render(
      <Layout
        children={<div data-testid="landing-page-test">Landing Page</div>}
      />
    );

    const landingPage = screen.getByTestId("landing-page-test");
    expect(landingPage).toBeInTheDocument();
  });
});
