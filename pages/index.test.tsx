import { render } from "@testing-library/react";
import Home from "pages/index.page";

describe("Home", () => {
  it("should render", () => {
    const screen = render(<Home />);
    expect(screen.getAllByRole("main")).toBeTruthy();
  });
});
