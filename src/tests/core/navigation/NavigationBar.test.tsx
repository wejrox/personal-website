import * as Enzyme from "enzyme";
import * as React from "react";
import NavigationBar from "../../../main/core/navigation/NavigationBar";
import * as sinon from "sinon";

describe("NavigationBar Component", () => {
    const toggleSpy = sinon.spy();
    sinon.replace(NavigationBar.prototype, "toggle", toggleSpy);
    const wrapper = Enzyme.shallow(<NavigationBar/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("does not toggle open state if not on mobile", () => {
        const prvOpenState: boolean = (wrapper.instance() as NavigationBar).state.isOpen;
        (wrapper.instance() as NavigationBar).toggle();

        expect(toggleSpy.called).toBe(true);
        expect((wrapper.instance() as NavigationBar).state.isOpen).toBe(prvOpenState);
    });

});
