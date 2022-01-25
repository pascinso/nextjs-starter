import { shallow } from "enzyme";
import { useApp } from "../_app.page";

describe("app", () => {
  const Component = jest.fn();
  const pageProps = {};
  function App() {
    return useApp({ Component, pageProps });
  }

  test("renders", () => {
    const wrapper = shallow(<App />).find("#app");
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
