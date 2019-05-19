import * as Enzyme from "enzyme";
import * as React from "react";
import Repository from "../../../main/components/repository/Repository";

describe("Repository Component", () => {
    const wrapper = Enzyme.shallow(<Repository/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});