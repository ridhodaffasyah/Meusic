import { render, screen } from "@testing-library/react";
import Navbar from ".";

describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
  });

  it("should render logo image", () => {
    render(<Navbar />);

    const logoImage = screen.getByRole("img");
    expect(logoImage).toHaveAttribute("src", "/assets/meusic-transparent.png");
  });

  it("should render sign in button", () => {
    render(<Navbar />);

    const signInButton = screen.getByRole("button", { name: "Sign In" });
    expect(signInButton).toBeInTheDocument();
  });
});
