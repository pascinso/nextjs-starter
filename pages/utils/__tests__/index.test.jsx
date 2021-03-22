import { shallow } from "enzyme";
import { useHome } from "../../index.page";

describe("useHome", () => {
  it("render", () => {
    const Home = useHome;

    const wrapper = shallow(<Home />);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
