import * as React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { observable } from "mobx";
import { observer } from "mobx-react";

/**
 * A form which contains a first and last name field, alongside an email and message field which will submit a message
 * to the database upon valid submission.
 * The email and message fields are required.
 */
@observer
class ContactForm extends React.Component {

    // (Optional) First name of the person submitting the form.
    @observable private firstName: string = "";

    // (Optional) Last name/Surname of the person submitting the form.
    @observable private lastName: string = "";

    // EMail address of the person submitting the form.
    @observable private email: string = "";

    // Message to be sent to the database.
    @observable private message: string = "";

    // Whether or not the user has successfully submitted.
    @observable private submitted: boolean = false;

    constructor(props: {}) {
        super(props);

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
                                   onChange={(e) => this.firstName = e.target.value}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={"lastName"}>Surname</Label>
                            <Input type={"text"} name={"last name"} id={"lastName"}
                                   onChange={(e) => this.lastName = e.target.value}/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for={"emailAddress"}>E-mail address</Label>
                    <Input required type={"email"} name={"email"} id={"emailAddress"}
                           onChange={(e) => this.email = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <Label for={"message"}>Message</Label>
                    <Input required type={"textarea"} name={"message"} id={"message"}
                           onChange={(e) => this.message = e.target.value}/>
                </FormGroup>
                {this.submitted &&
                <div className={"d-flex pb-3 success-message justify-content-center"}>
                    Message sent.
                </div>
                }
                <Button type={"submit"} id={"submit"} className={"btn-block"}>Send</Button>
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
        this.submitted = true;
        console.log(this.message);
    }
}

export default ContactForm;
