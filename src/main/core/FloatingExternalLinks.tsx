import * as React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import IconLink from "../components/IconLink";
import Col from "reactstrap/lib/Col";

/**
 * FloatingExternalLinks located at the bottom right of the page, fixed.
 */
class FloatingExternalLinks extends React.Component {
    public render() {
        return (
            <div className={"floating-links"}>
                <Col className={"d-flex justify-content-end"}>
                    <IconLink link={"https://www.github.com/wejrox/"} icon={<GoMarkGithub size={32}/>}/>
                    <IconLink link={"https://www.linkedin.com/in/james-mcdowell001/"} icon={<FaLinkedin size={32}/>}/>
                </Col>
            </div>
        );
    }
}

export default FloatingExternalLinks;
