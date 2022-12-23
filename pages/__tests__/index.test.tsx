import { screen, render } from "@testing-library/react";
import Home from "pages/index.page";

jest.mock("@pascinso/utils");

describe("Home", () => {
  it("should render", () => {
    render(<Home />);
    expect(screen.getAllByRole("main")).toBeTruthy();
  });
});
