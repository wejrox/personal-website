import * as React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

/**
 * @property title     Word describing the contents.
 * @property contents  Value to be displayed.
 */
interface IContactInfoRowProps {
    title: string;
    contents: string;
}

/**
 * Generates a row of information in the format 'title: contents'.
 */
class ContactInfoRow extends React.Component<IContactInfoRowProps> {
    public render() {
        return (
            <Row>
                <Col sm={3} md={2}>
                    <b>{this.props.title}: </b>
                </Col>
                <Col>
                    {this.props.contents}
                </Col>
            </Row>
        );
    }
}

export default ContactInfoRow;
