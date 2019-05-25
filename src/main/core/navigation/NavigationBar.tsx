import * as React from "react";
import Row from "reactstrap/lib/Row";
import NavigationEntry from "./NavigationEntry";
import { PossiblePages } from "../../stores/WebsiteStore";
import { FiMinus } from "react-icons/fi";

/**
 * Navigation bar fixed to the top of the page which disappears on scroll down and reappears on scroll up.
 */
class NavigationBar extends React.Component {

    public render() {
        return (
            <Row className={"align-items-center"}>
                <NavigationEntry text={"Home"} destination={PossiblePages.LANDING}/>
                <FiMinus style={{transform: "rotate(90deg)"}}/>
                <NavigationEntry text={"Projects"} destination={PossiblePages.PROJECTS}/>
                <FiMinus style={{transform: "rotate(90deg)"}}/>
                <NavigationEntry text={"Contact"} destination={PossiblePages.CONTACT}/>
            </Row>
        );
    }
}

export default NavigationBar;
