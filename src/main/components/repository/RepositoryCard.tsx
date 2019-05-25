import * as React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

/**
 * @property {string} title        Title of the repository project.
 * @property {string} url          Link to the repository.
 * @property {string} description  Long description of the project within the repository.
 * @property {string} image        An image representing the project contained in the repository.
 */
interface IRepositoryCardProps {
    title: string;
    url: string;
    description: string;
    image: string;
}

/**
 * A box containing details about a git repository.
 */
class RepositoryCard extends React.Component<IRepositoryCardProps> {

    public render() {
        return (
            <Row>
                <Col>
                    Repository card
                </Col>
            </Row>
        );
    }
}

export default RepositoryCard;
