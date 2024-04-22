import "@testing-library/jest-dom";
import Employer from ".";
import { render, screen } from "@testing-library/react";

describe("Employer Component", () => {
  it("renders the employer component with all present and correct props", () => {
    render(<Employer />);

    const employerComponent = screen.getByTestId("employer-component");

    expect(employerComponent).toBeInTheDocument();
  });
});
