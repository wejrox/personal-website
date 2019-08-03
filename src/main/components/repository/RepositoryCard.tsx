import * as React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardTitle from "reactstrap/lib/CardTitle";
import CardText from "reactstrap/lib/CardText";
import CardLink from "reactstrap/lib/CardLink";
import { GoRepo } from "react-icons/go";
import { Button, CardFooter, CardSubtitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

/**
 * @property {string} id                ID of the repository in the database.
 * @property {string} name              Title of the repository project.
 * @property {string} repoUrl           Link to the repository.
 * @property {string} shortDescription  Short description of the project within the repository.
 * @property {string} longDescription   Long description of the project within the repository.
 * @property {string} image             An image representing the project contained in the repository.
 */
interface IRepositoryCardProps {
    id: string;
    name: string;
    repoUrl: string;
    cloneUrl: string;
    language: string;
    shortDescription: string;
    longDescription: string;
}

/**
 * A box containing details about a git repository.
 */
class RepositoryCard extends React.Component<IRepositoryCardProps> {
    private image: string =
        `https://raw.githubusercontent.com/wejrox/${this.props.name}
        /master/project-details/screenshot.png`;

    public render() {
        return (
            <Card className={"repo-card shadow-sm"}>
                <CardBody>
                    <Row>
                        <Col>
                            <CardTitle className={"float-left font-weight-normal"}>{this.props.name}</CardTitle>
                        </Col>
                        <Col xs={1}>
                            <CardLink className={"float-right"} href={this.props.repoUrl}>
                                <GoRepo size={24}/>
                            </CardLink>
                        </Col>
                    </Row>
                </CardBody>
                <img className={"shadow-sm"} width={"100%"} src={this.image}
                     alt={this.props.name + " project screenshot"}/>
                <CardSubtitle className={"m-2"}>
                    <Link to={`/projects/${this.props.name}`}
                          className={"p-1 ml-2 float-right border rounded"}>
                        <GoRepo size={24}/>
                        A link
                    </Link>
                </CardSubtitle>
                <CardBody>
                    <CardText className={"text-muted"}>{this.props.shortDescription}</CardText>
                </CardBody>
                <CardFooter className={"d-flex flex-column shadow-sm p-0"}>
                    <Button className={"rounded-bottom d-flex flex-column"}>Read more</Button>
                </CardFooter>
            </Card>
        );
    }
}

export default RepositoryCard;
