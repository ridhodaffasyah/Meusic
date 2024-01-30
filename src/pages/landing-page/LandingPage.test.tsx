import LandingPage from ".";
import { render, screen } from "@testing-library/react";

describe("LandingPage", () => {
  it("should render", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("landing-page-test")).toBeInTheDocument();
  });
    
    it("should have text", () => {
        render(<LandingPage />);
        
        const text = screen.getByText("Dengarkan musik dengan mudah dan tanpa batas, cukup login dengan akun Spotify kamu!");
        expect(text).toBeInTheDocument();
    });

    it("should have a background image", () => {
        render(<LandingPage />);
        
        const bgImage = screen.getByTestId("bg-image");
        expect(bgImage).toBeInTheDocument();
    });
});
