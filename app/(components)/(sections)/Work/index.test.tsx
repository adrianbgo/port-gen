import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Work from ".";
import {
  TestNegativeResume,
  TestPositiveResume,
} from "@/app/(utils)/testObjects";

describe("Work Component", () => {
  it("renders the work component when data is available", () => {
    render(<Work work={TestPositiveResume.work} />);

    const component = screen.getByTestId("work-component");

    expect(component).toBeInTheDocument();
  });

  it("renders no work component when data is unavailable", () => {
    render(<Work work={TestNegativeResume.work} />);

    const component = screen.queryAllByTestId("work-component");

    expect(component).not.toHaveLength;
  });

  it("shows as a timeline", () => {
    render(<Work work={TestPositiveResume.work} />);

    const timeline = screen.getByTestId("timeline-component");

    expect(timeline).toBeInTheDocument();
  });
});
