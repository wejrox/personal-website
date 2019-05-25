import * as Enzyme from "enzyme";
import * as React from "react";
import Panel from "../../main/core/Panel";

describe("Panel Component", () => {
    const wrapper = Enzyme.shallow(<Panel/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
