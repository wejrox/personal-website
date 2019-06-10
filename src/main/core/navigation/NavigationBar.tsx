import * as React from "react";
import { Collapse, Container, Nav, Navbar, NavbarToggler, NavItem } from "reactstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Landing from "../../pages/Landing";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";

/**
 * @property {boolean} isOpen  Whether or not the navigation bar is open.
 */
interface INavigationBarState {
    isOpen: boolean;
}

/**
 * Navigation bar fixed to the top of the page which remains visible as the user scrolls.
 */
class NavigationBar extends React.Component<{}, INavigationBarState> {
    constructor(props: object) {
        super(props);
        this.state = {isOpen: false};

        this.toggle = this.toggle.bind(this);
    }

    public render() {
        return (
            <Router>
                <Navbar color="light" light fixed={"top"} expand={"md"}>
                    <Container>
                        <Link to={"/"} className={"navbar-brand"}>James McDowell</Link>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar className={"justify-content-end"}>
                            <Nav navbar vertical={false}>
                                <NavItem className={"d-flex justify-content-center"}>
                                    <Link className={"nav-link"} to={"/"}>Home</Link>
                                </NavItem>
                                <NavItem className={"d-flex justify-content-center"}>
                                    <Link className={"nav-link"} to={"/projects/"}>Projects</Link>
                                </NavItem>
                                <NavItem className={"d-flex justify-content-center"}>
                                    <Link className={"nav-link"} to={"/contact/"}>Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <div className={"navbar-compensation"}/>

                <Route path={"/"} exact component={Landing}/>
                <Route path={"/projects/"} component={Projects}/>
                <Route path={"/contact/"} component={Contact}/>
            </Router>
        );
    }

    /**
     * Toggles whether or not the navbar is open (mobile).
     */
    public toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }
}

export default NavigationBar;
