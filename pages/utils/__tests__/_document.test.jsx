import { shallow } from "enzyme";
import { App } from "../../_document.page";

describe("_document.page.jsx", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });

  describe("getInitialProps", () => {
    test("return an object", async () => {
      const ctx = { renderPage: jest.fn };
      const result = await App.getInitialProps(ctx);
      expect(result).toEqual({ html: undefined, head: undefined, styles: [] });
    });
  });
});
