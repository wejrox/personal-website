import * as Enzyme from "enzyme";
import * as React from "react";
import NavigationEntry from "../../../main/core/navigation/NavigationEntry";
import { PossiblePages, websiteStore } from "../../../main/stores/WebsiteStore";

describe("NavigationEntry Component", () => {
    const text: string = "Destination";
    const wrapper = Enzyme.shallow(<NavigationEntry text={text} destination={PossiblePages.CONTACT}/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("sets the current page correctly", () => {
        wrapper.simulate("click");
        expect(websiteStore.currentPage).toBe(PossiblePages.CONTACT);
    });
});
