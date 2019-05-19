import * as Enzyme from "enzyme";
import * as React from "react";
import Gallery from "../../../main/components/repository/Gallery";

describe("Gallery Component", () => {
    const wrapper = Enzyme.shallow(<Gallery/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});