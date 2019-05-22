import * as React from "react";
import Row from "reactstrap/lib/Row";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import IconLink from "../components/IconLink";
import Col from "reactstrap/lib/Col";

class Header extends React.Component {

    public render() {
        return (
            <Row>
                <Col>
                    <IconLink link={"https://www.github.com/wejrox/"} icon={<GoMarkGithub/>}/>
                    <IconLink link={"https://www.linkedin.com/in/james-mcdowell001/"} icon={<FaLinkedin/>}/>
                </Col>
            </Row>
        );
    }
}

export default Header;