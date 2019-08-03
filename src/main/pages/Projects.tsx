import * as React from "react";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Gallery from "../components/repository/Gallery";
import { observer } from "mobx-react";
import { action, observable } from "mobx";

@observer
class Projects extends React.Component {
    @observable
    private projectRundown: string = "";

    public render() {
        return (
            <>
                <Container>
                    <div className={"navbar-compensation"}/>
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

    @action
    private async getRepoDetails() {

    }
}

export default Projects;
