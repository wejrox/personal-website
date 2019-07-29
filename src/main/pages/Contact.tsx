import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import ContactForm from "../components/contact/ContactForm";
import ContactInfoRow from "../components/contact/ContactInfoRow";

/**
 * Renders a page which contains contact details on the left and a contact form on the right.
 */
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
                        <ContactInfoRow title={"Phone"} contents={"+61 401 939 576"}/>
                        <ContactInfoRow title={"Email"} contents={"james.mcdowell001@gmail.com"}/>
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
}

export default Contact;
