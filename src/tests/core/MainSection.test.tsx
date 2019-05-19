import * as Enzyme from "enzyme";
import * as React from "react";
import MainSection from "../../main/core/MainSection";

describe("MainSection Component", () => {
    const wrapper = Enzyme.shallow(<MainSection/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});