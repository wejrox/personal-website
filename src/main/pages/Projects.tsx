import * as React from "react";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Gallery from "../components/repository/Gallery";

class Projects extends React.Component {
    public render() {
        return (
            <>
                <Container>
                    <Row className={"mb-4"}>
                        <Col className={"d-flex justify-content-center"}>
                            <h1>Projects</h1>
                        </Col>
                    </Row>
                </Container>
                <Gallery/>
            </>
        );
    }
}

export default Projects;
