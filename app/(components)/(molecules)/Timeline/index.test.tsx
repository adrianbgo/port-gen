import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Timeline from ".";
import {
  TestDatelessResume,
  TestPositiveResume,
} from "@/app/(utils)/testObjects";

describe("Timeline Component", () => {
  it("renders the timeline with correct props", () => {
    render(
      <Timeline
        employers={TestPositiveResume.work}
        volunteer={TestPositiveResume.volunteer}
      />,
    );

    const timeline = screen.getByTestId("timeline-component");

    expect(timeline).toBeInTheDocument();
    expect(timeline.firstChild).toBeInTheDocument();
    expect(timeline.firstChild!.childNodes).toHaveLength;
    expect(timeline.firstChild!.childNodes.length).toStrictEqual(
      TestPositiveResume.work.length + TestPositiveResume.volunteer.length,
    );
  });

  it("does not sort when there is no startDate present", () => {
    render(
      <Timeline
        employers={TestDatelessResume.work}
        volunteer={TestDatelessResume.volunteer}
      />,
    );

    const timeline = screen.getByTestId("timeline-component");

    expect(timeline).toBeInTheDocument();
    expect(timeline.firstChild).toBeInTheDocument();
    expect(timeline.firstChild!.childNodes).toHaveLength;
    expect(timeline.firstChild).toHaveTextContent("Pied Piper");
  });
});
