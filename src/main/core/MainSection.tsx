import * as React from "react";
import { observer } from "mobx-react";
import { PossiblePages, websiteStore } from "../stores/WebsiteStore";
import Contact from "../pages/Contact";
import Landing from "../pages/Landing";
import Projects from "../pages/Projects";

/**
 * The main section of the page, where content is displayed.
 *
 * DEPRECATED: Using react-router instead.
 */
@observer
class MainSection extends React.Component {

    public render() {
        switch (websiteStore.currentPage) {
            case PossiblePages.LANDING:
                return <Landing/>;
            case PossiblePages.PROJECTS:
                return <Projects/>;
            case PossiblePages.CONTACT:
                return <Contact/>;
        }
    }
}

export default MainSection;
