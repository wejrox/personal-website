import * as Enzyme from "enzyme";
import * as React from "react";
import NavigationBar from "../../main/core/navigation/NavigationBar";

describe("NavigationBar Component", () => {
    const wrapper = Enzyme.shallow(<NavigationBar/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});