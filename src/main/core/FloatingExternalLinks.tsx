import * as React from "react";
import {GoMarkGithub} from "react-icons/go";
import {FaLinkedin} from "react-icons/fa";
import IconLink from "../components/IconLink";
import Col from "reactstrap/lib/Col";
import {isMobile} from "react-device-detect";
import {css} from "@emotion/core";

/**
 * FloatingExternalLinks located at the bottom right of the page, fixed.
 */
class FloatingExternalLinks extends React.Component {
    public render() {
        return (
            <div css={css`
              position: fixed;
              left: calc(100vw - 80px - 10px);
              width: 80px;
              bottom: 50px;
              z-index: 5000;
            `}>
                <Col className={(!isMobile ? "d-flex " : "") + "justify-content-end"}>
                    <IconLink link={"https://www.github.com/wejrox/"} icon={<GoMarkGithub size={32}/>}/>
                    <IconLink link={"https://www.linkedin.com/in/james-mcdowell001/"} icon={<FaLinkedin size={32}/>}/>
                </Col>
            </div>
        );
    }
}

export default FloatingExternalLinks;
