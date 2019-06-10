import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

class Contact extends React.Component {
    public render() {
        return (
            <Container className={"pb-3"}>
                <div className={"navbar-compensation"}/>
                <Row className={"mb-4"}>
                    <Col className={"d-flex justify-content-center"}>
                        <h1>Contact</h1>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} md={6} className={"mb-3"}>
                        <Row className={"pb-3"}>
                            <Col>
                                <h2>Get in touch</h2>
                            </Col>
                        </Row>
                        {this.generateRow("Phone", "+61 401 939 576")}
                        {this.generateRow("Email", "james.mcdowell001@gmail.com")}
                    </Col>
                    <Col className={"mb-3"}>
                        <Row className={"d-flex justify-content-center px-3 pb-3"}>
                            <h2>Send me a message</h2>
                        </Row>
                        <Row className={"d-flex justify-content-center px-3"}>
                            <ContactForm/>
                        </Row>
                    </Col>
                </Row>
            </Container>
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
