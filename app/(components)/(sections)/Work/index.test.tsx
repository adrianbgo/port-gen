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

  it("renders no volunteer work when includeVolunteer is not included", () => {
    render(
      <Work
        work={TestPositiveResume.work}
        volunteer={TestPositiveResume.volunteer}
      />,
    );

    const timeline = screen.getByTestId("timeline-component");

    const volunteerExample = screen.getByText("CoderDojo");
    expect(timeline).toBeInTheDocument();
    expect(timeline).toContainElement(volunteerExample);
  });

  it("renders no volunteer work when volunteer work is unavailable", () => {
    render(
      <Work
        work={TestPositiveResume.work}
        volunteer={TestNegativeResume.volunteer}
      />,
    );

    const timeline = screen.getByTestId("timeline-component");

    const volunteerExample = screen.queryAllByText("test");

    expect(timeline).toBeInTheDocument();
    expect(volunteerExample.length).toStrictEqual(0);
  });
});
