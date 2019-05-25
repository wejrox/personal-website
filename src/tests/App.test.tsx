import React from "react";
import * as Enzyme from "enzyme";
import App from "../main/App";

describe("App Component", () => {
    const wrapper = Enzyme.shallow(<App/>);

    it("renders without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
