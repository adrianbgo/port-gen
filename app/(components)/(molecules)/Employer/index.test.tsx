import "@testing-library/jest-dom";
import Employer from ".";
import { render, screen } from "@testing-library/react";
import { TestPositiveResume } from "@/app/(utils)/testObjects";

describe("Employer Component", () => {
  it("renders the employer component with all present and correct props", () => {
    render(<Employer data={TestPositiveResume.work[0]} />);

    const employerComponent = screen.getByTestId("employer-component");

    expect(employerComponent).toBeInTheDocument();
  });
});
