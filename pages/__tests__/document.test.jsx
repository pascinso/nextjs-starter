import { shallow } from "enzyme";
import { App } from "../_document.page";

describe("document", () => {
  it("renders", () => {
    const html = shallow(<App />).find("Html");

    // expect(wrapper.isEmptyRender()).toBeFalsy();
    expect(html.find("Head")).toBeTruthy();
    expect(html.find("body").find("Main")).toBeTruthy();
  });

  describe("getInitialProps", () => {
    test("return an object", async () => {
      const ctx = { defaultGetInitialProps: jest.fn() };
      const result = await App.getInitialProps(ctx);
      expect(result).toEqual({});
    });
  });
});
