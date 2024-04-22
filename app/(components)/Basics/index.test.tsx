import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Basics from ".";
import {
  TestNegativeResume,
  TestPositiveResume,
} from "@/app/(utils)/testObjects";
import styles from "./index.module.css";

describe("Basics Component", () => {
  it("renders the component", () => {
    render(<Basics basics={TestPositiveResume.basics} />);

    const component = screen.getByTestId("basics-component");

    expect(component).toBeInTheDocument();
  });

  it("renders no component if unavailable", () => {
    render(<Basics />);
    const component = screen.queryAllByTestId("basics-component");

    expect(component).not.toHaveLength;
  });

  it("renders an image when available", () => {
    render(<Basics basics={TestPositiveResume.basics} />);

    const logo = screen.getByAltText(TestPositiveResume.basics.name);

    expect(logo).toBeInTheDocument();
  });

  it("renders the logo if no image given", () => {
    render(<Basics basics={TestNegativeResume.basics} />);

    const logo = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });

  it("renders the name when available", () => {
    render(<Basics basics={TestPositiveResume.basics} />);

    const nameField = screen.getByRole("heading", { level: 1 });

    expect(nameField).toBeInTheDocument();
    expect(nameField.innerHTML).toContain(TestPositiveResume.basics.name);
  });

  it("renders no name if not available", () => {
    render(<Basics basics={TestNegativeResume.basics} />);

    const nameField = screen.queryAllByRole("heading", { level: 1 });

    expect(nameField).not.toHaveLength;
  });

  it("renders the label when available", () => {
    render(<Basics basics={TestPositiveResume.basics} />);

    const label = screen.getByRole("heading", { level: 1 });

    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toContain(TestPositiveResume.basics.label);
  });

  it("renders no label when unavailable", () => {
    render(<Basics basics={TestNegativeResume.basics} />);

    const nameField = screen.queryAllByRole("heading", { level: 1 });

    expect(nameField).not.toHaveLength;
  });

  it("renders the email when available", () => {
    render(<Basics basics={TestPositiveResume.basics} />);

    const email = screen.getByTestId("email");

    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute(
      "href",
      `mailto:${TestPositiveResume.basics.email}`,
    );
    expect(email.firstChild).toHaveClass(styles.icon);
  });

  it("renders no email when unavailable", () => {
    render(<Basics basics={TestNegativeResume.basics} />);

    const email = screen.queryAllByTestId("email");

    expect(email).not.toHaveLength;
  });

  it("renders the phone number when available", () => {
    render(<Basics basics={TestPositiveResume.basics} />);

    const phone = screen.getByTestId("phone");

    expect(phone).toBeInTheDocument();
    expect(phone).toHaveAttribute(
      "href",
      `tel:+${TestPositiveResume.basics.phone}`,
    );
    expect(phone.firstChild).toHaveClass(styles.icon);
  });

  it("renders no phone when unavailable", () => {
    render(<Basics basics={TestNegativeResume.basics} />);

    const email = screen.queryAllByTestId("phone");

    expect(email).not.toHaveLength;
  });

  it("renders all social logos when available", () => {
    render(<Basics basics={TestPositiveResume.basics} />);

    const socials = screen.queryAllByTestId("social");

    expect(socials).toHaveLength;
    expect(socials.length).toStrictEqual(
      TestPositiveResume.basics.profiles.length,
    );
  });

  it("renders no social logos when unavailable", () => {
    render(<Basics basics={TestNegativeResume.basics} />);

    const email = screen.queryAllByTestId("social");

    expect(email).not.toHaveLength;
  });

  it("renders the summary when available", () => {
    render(<Basics basics={TestPositiveResume.basics} />);

    const summary = screen.getByTestId("summary");

    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent(TestPositiveResume.basics.summary);
  });

  it("renders no summary when unavailable", () => {
    render(<Basics basics={TestNegativeResume.basics} />);

    const email = screen.queryAllByTestId("summary");

    expect(email).not.toHaveLength;
  });
});
