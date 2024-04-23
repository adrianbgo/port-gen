import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Timeline from ".";
import { TestPositiveResume } from "@/app/(utils)/testObjects";

describe("Timeline Component", () => {
  it("renders the timeline with correct props", () => {
    render(<Timeline employers={TestPositiveResume.work} />);

    const timeline = screen.getByTestId("timeline-component");

    expect(timeline).toBeInTheDocument();
    expect(timeline.firstChild).toBeInTheDocument();
    expect(timeline.firstChild!.childNodes).toHaveLength;
    expect(timeline.firstChild!.childNodes.length).toStrictEqual(
      TestPositiveResume.work.length,
    );
  });
});
