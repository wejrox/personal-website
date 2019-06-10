import * as React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardTitle from "reactstrap/lib/CardTitle";
import CardText from "reactstrap/lib/CardText";
import CardLink from "reactstrap/lib/CardLink";
import IconLink from "../IconLink";
import { GoRepo } from "react-icons/go";
import { Col, Row } from "reactstrap";

/**
 * @property {string} id                ID of the repository in the database.
 * @property {string} title             Title of the repository project.
 * @property {string} url               Link to the repository.
 * @property {string} shortDescription  Short description of the project within the repository.
 * @property {string} longDescription   Long description of the project within the repository.
 * @property {string} image             An image representing the project contained in the repository.
 */
interface IRepositoryCardProps {
    id: string;
    title: string;
    url: string;
    shortDescription: string;
    longDescription: string;
    image: string;
}

/**
 * A box containing details about a git repository.
 */
class RepositoryCard extends React.Component<IRepositoryCardProps> {
    public render() {
        return (
            <Card className={"repo-card"}>
                <CardBody>
                    <Row>
                        <Col>
                            <CardTitle className={"float-left"}>{this.props.title}</CardTitle>
                        </Col>
                        <Col>
                            <CardLink className={"float-right"}>
                                <IconLink link={this.props.url} icon={<GoRepo size={24}/>}/>
                            </CardLink>
                        </Col>
                    </Row>
                </CardBody>
                <img width={"100%"} src={this.props.image} alt={"Project screenshot"}/>
                <CardBody>
                    <CardText>{this.props.shortDescription}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default RepositoryCard;
