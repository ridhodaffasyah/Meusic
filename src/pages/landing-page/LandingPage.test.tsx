import LandingPage from ".";
import { render, screen } from "@testing-library/react";

describe("LandingPage", () => {
  it("should render", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("landing-page-test")).toBeInTheDocument();
  });

  it("should have text", () => {
    render(<LandingPage />);

    const text = screen.getByText(
      /Dengarkan musik dengan mudah dan tanpa batas, cukup masuk dengan akun/i
    );
    const spotifyLink = screen.getByText(/Spotify/i);
    expect(text).toContainElement(spotifyLink);
    expect(spotifyLink.tagName).toBe("A");
    expect(text).toBeInTheDocument();
  });

  it("should have a background image", () => {
    render(<LandingPage />);

    const bgImage = screen.getByTestId("bg-image");
    expect(bgImage).toBeInTheDocument();
  });
});
