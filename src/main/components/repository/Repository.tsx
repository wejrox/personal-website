import * as React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

interface RepositoryProps {

}

class Repository extends React.Component<RepositoryProps> {

    public render() {
        return (
            <Row>
                <Col>
                    Gallery
                </Col>
            </Row>
        );
    }
}

export default Repository;