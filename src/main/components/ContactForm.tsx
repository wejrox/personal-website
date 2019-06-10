import * as React from "react";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";

/**
 * @property {string} firstName  (Optional) First name of the person submitting the form.
 * @property {string} lastName   (Optional) Last name/Surname of the person submitting the form.
 * @property {string} email      EMail address of the person submitting the form.
 * @property {string} message    Message to be sent to the database.
 */
interface IContactFormState {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

/**
 * A form which contains a first and last name field, alongside an email and message field which will submit a message
 * to the database upon valid submission.
 * The email and message fields are required.
 */
class ContactForm extends React.Component<{}, IContactFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {firstName: "", lastName: "", email: "", message: ""};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={"firstName"}>First name</Label>
                            <Input type={"text"} name={"first name"} id={"firstName"}
                                   onChange={(e) => this.setState({firstName: e.target.value})}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={"lastName"}>Surname</Label>
                            <Input type={"text"} name={"last name"} id={"lastName"}
                                   onChange={(e) => this.setState({lastName: e.target.value})}/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for={"emailAddress"}>E-mail address</Label>
                    <Input required type={"email"} name={"email"} id={"emailAddress"}
                           onChange={(e) => this.setState({email: e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for={"message"}>Message</Label>
                    <Input required type={"textarea"} name={"message"} id={"message"}
                           onChange={(e) => this.setState({message: e.target.value})}/>
                    <FormFeedback hidden={false}>Don't forget to input a message for me!</FormFeedback>
                </FormGroup>
                <Button type={"submit"} id={"submit"}>Send</Button>
            </Form>
        );
    }

    /**
     * TODO: Database connection and submission.
     * Handles the submission of the contact form.
     * Saves the submission into the database for later viewing.
     *
     * @param {React.FormEvent<HTMLFormElement>} event  The form event that triggered the function.
     */
    public handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        // Prevent page refresh.
        event.preventDefault();
        console.log(this.state.message);
    }
}

export default ContactForm;
