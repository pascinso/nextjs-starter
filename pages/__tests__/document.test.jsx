import { shallow } from "enzyme";
import { App } from "../_document.page";

describe("document", () => {
  it("renders", () => expect(shallow(<App />).isEmptyRender()).toBeFalsy());

  describe("getInitialProps", () => {
    test("return an object", async () =>
      expect(
        await App.getInitialProps({ defaultGetInitialProps: jest.fn() })
      ).toEqual({}));
  });
});
