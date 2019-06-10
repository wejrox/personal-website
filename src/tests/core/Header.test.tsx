import * as Enzyme from "enzyme";
import * as React from "react";
import FloatingExternalLinks from "../../main/core/FloatingExternalLinks";

describe("FloatingExternalLinks Component", () => {
    const wrapper = Enzyme.shallow(<FloatingExternalLinks/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
