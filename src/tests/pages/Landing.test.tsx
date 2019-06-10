import React from "react";
import * as Enzyme from "enzyme";
import Landing from "../../main/pages/Landing";

describe("Landing Page", () => {
    const wrapper = Enzyme.shallow(<Landing/>);

    it("renders without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
