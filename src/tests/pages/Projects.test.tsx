import React from "react";
import * as Enzyme from "enzyme";
import Projects from "../../main/pages/Projects";

describe("Projects Page", () => {
    const wrapper = Enzyme.shallow(<Projects/>);

    it("renders without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
