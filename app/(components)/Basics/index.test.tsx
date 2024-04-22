import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Basics from ".";

describe("Basics Component", () => {
  it("renders the component", () => {
    render(<Basics />);

    const text = screen.getByText("Basics");

    expect(text).toBeInTheDocument();
  });
});
