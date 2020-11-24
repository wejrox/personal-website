import * as React from "react";
import {Collapse, Container, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {css} from "@emotion/core";

/**
 * Navigation bar fixed to the top of the page which remains visible as the user scrolls.
 */
@observer
class NavigationBar extends React.Component {
    
    // Whether or not the navigation bar is open.
    @observable public isOpen: boolean = false;
    navItemStyle = css`
        cursor: default !important;
        user-select: none !important;
        border-bottom: 2px solid rgba(97, 218, 251, 0) !important;
        transition: 500ms ease;
    
        &:hover {
            border-bottom: 2px solid rgba(97, 218, 251, 1) !important;
        }`;
    
    constructor(props: object) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
    }
    
    public render() {
        return (
            <Navbar color="light" light sticky={"top"} expand={"md"}
                    className={"shadow-sm" + (isMobile ? "py-3" : "")}
                    css={css`padding: 0; width: 100vw;`}>
                <Container>
                    <Link to={"/"} className={"navbar-brand px-3"}>James McDowell</Link>
                    <NavbarToggler onClick={this.toggle} className={"mx-3"}/>
                    <Collapse isOpen={this.isOpen} navbar className={"justify-content-end"}>
                        <Nav navbar vertical={false}>
                            <NavItem onClick={this.toggle} css={this.navItemStyle}>
                                <Link className={"d-flex justify-content-center nav-link"} to={"/"}>Home</Link>
                            </NavItem>
                            <NavItem onClick={this.toggle} css={this.navItemStyle}>
                                <Link className={"d-flex justify-content-center nav-link"}
                                      to={"/projects/"}>Projects</Link>
                            </NavItem>
                            <NavItem onClick={this.toggle} css={this.navItemStyle}>
                                <Link className={"d-flex justify-content-center nav-link"}
                                      to={"/contact/"}>Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
    
    /**
     * Toggles whether or not the navbar is open (mobile).
     */
    public toggle() {
        if (isMobile) {
            this.isOpen = !this.isOpen;
        }
    }
}

export default NavigationBar;
