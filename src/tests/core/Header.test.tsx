import * as Enzyme from "enzyme";
import * as React from "react";
import Header from "../../main/core/Header";

describe("Header Component", () => {
    const wrapper = Enzyme.shallow(<Header/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
