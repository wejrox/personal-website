import * as Enzyme from "enzyme";
import * as React from "react";
import RepositoryCard from "../../../main/components/repository/RepositoryCard";

describe("RepositoryCard Component", () => {
    const wrapper = Enzyme.shallow(<RepositoryCard description={""} image={""} name={""} repoUrl={""}/>);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
