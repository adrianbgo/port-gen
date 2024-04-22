import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Timeline from ".";

describe("Timeline Component", () => {
  it("renders the timeline with correct props", () => {
    render(<Timeline />);

    const timeline = screen.getByTestId("timeline-component");

    expect(timeline).toBeInTheDocument();
  });
});
