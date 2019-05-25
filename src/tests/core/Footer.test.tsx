import * as Enzyme from "enzyme";
import * as React from "react";
import Footer from "../../main/core/Footer";

describe("Footer Component", () => {
    const wrapper = Enzyme.shallow(<Footer/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
