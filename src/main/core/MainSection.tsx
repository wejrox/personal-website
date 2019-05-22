import * as React from "react";
import { observer } from "mobx-react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import { websiteStore } from "../stores/WebsiteStore";

@observer
class MainSection extends React.Component {

    public render() {
        return (
            <Row>
                <Col>
                    {websiteStore.pageName}
                </Col>
            </Row>
        );
    }
}

export default MainSection;