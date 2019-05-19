import * as Enzyme from "enzyme";
import * as React from "react";
import IconLink from "../../main/components/IconLink";
import { Icon } from "../../main/Icons";

describe("IconLink Component", () => {
    const link: string = "https://www.google.com.au";
    const icon: Icon = Icon.GoMarkGithub;
    const wrapper = Enzyme.shallow(<IconLink link={link} icon={icon}/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});