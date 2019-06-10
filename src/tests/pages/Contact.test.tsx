import React from "react";
import * as Enzyme from "enzyme";
import Contact from "../../main/pages/Contact";

describe("Contact Page", () => {
    const wrapper = Enzyme.shallow(<Contact/>);

    it("renders without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
