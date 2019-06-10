import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

class Contact extends React.Component {
    public render() {
        return (
            <>
                <div className={"navbar-compensation"}/>
                <Container className={"pb-3"}>
                    <Row className={"mb-4"}>
                        <Col className={"d-flex justify-content-center"}>
                            <h1>Contact</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"mb-3"}>
                            <Row className={"pb-3"}>
                                <Col>
                                    <h2>Get in touch</h2>
                                </Col>
                            </Row>
                            {this.generateRow("Phone", "+61 401 939 576")}
                            {this.generateRow("Email", "james.mcdowell001@gmail.com")}
                        </Col>
                        <Col className={"mb-3"}>
                            <Row className={"d-flex justify-content-center pb-3"}>
                                <h2>Send me a message</h2>
                            </Row>
                            <Row className={"d-flex justify-content-center"}>
                                <ContactForm/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className={"navbar-compensation"}/>
            </>
        );
    }

    /**
     * Generates a row of information in the format 'title: contents'
     * @param title     Word describing the contents.
     * @param contents  Value to be displayed.
     */
    public generateRow(title: string, contents: string) {
        return (
            <Row>
                <Col sm={3} md={2}>
                    <b>{title}: </b>
                </Col>
                <Col>
                    {contents}
                </Col>
            </Row>
        );
    }
}

export default Contact;
