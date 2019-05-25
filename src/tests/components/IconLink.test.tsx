import * as Enzyme from "enzyme";
import * as React from "react";
import IconLink from "../../main/components/IconLink";
import { FiMinus } from "react-icons/fi";

describe("IconLink Component", () => {
    const link: string = "https://www.google.com.au";
    const icon: JSX.Element = <FiMinus rotate={90}/>;
    const wrapper = Enzyme.shallow(<IconLink link={link} icon={icon}/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
