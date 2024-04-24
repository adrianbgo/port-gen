import "@testing-library/jest-dom";
import "./date.extension";

describe("Date extension utility", () => {
  it("works with any number of arguments", () => {
    const testDate = new Date("2021-01-01");
    expect(testDate.format()).toStrictEqual("Thu Dec 31 2020 19:00:00");
    expect(testDate.format("mmm yyyy")).toStrictEqual("Dec 2020");
    expect(testDate.format("mmm yyyy", true)).toStrictEqual("Jan 2021");
  });
  it("handles UTC", () => {
    const testDate = new Date("2021-01-01");
    expect(testDate.format("UTC:mmm yyyy")).toStrictEqual("Jan 2021");
  });
  it("handles multiple types of masks", () => {
    const testDate = new Date("2021-01-01");
    expect(testDate.format("shortDate", true)).toStrictEqual("1/1/21");
    expect(testDate.format("mmm yyyy", true)).toStrictEqual("Jan 2021");
  });
  it("handles all flags", () => {
    const testDate = new Date("2021-01-24 02:00:00:500 -05:00");
    expect(
      testDate.format(
        "d dd ddd dddd m mm mmm mmmm yy yyyy h hh H HH M MM s ss l L t tt T TT Z o S",
        false,
      ),
    ).toStrictEqual(
      "24 24 Sun Sunday 1 01 Jan January 21 2021 2 02 2 02 0 00 0 00 500 50 a am A AM EST -0500 th",
    );
  });
});
