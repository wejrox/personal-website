import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

/**
 * Holds a definition for the parameters to expect when this component is routed to.
 *
 * @property {string} id  The GitHub project ID.
 */
interface IMatchParams {
    id: string;
}

/**
 * Holds a definition of parameters in the format that they will be passed in by React-Router.
 *
 * @property {IMatchParams} params  Parameters object passed in by React-Router.
 */
interface IProjectBlogProps extends RouteComponentProps<IMatchParams> {
    params: IMatchParams;
}

/**
 * Renders an entry for a given GitHub project.
 * Gets the text to display by grabbing it from the raw project path available on GitHub and displaying it as markup.
 */
class ProjectBlog extends React.Component<IProjectBlogProps> {
    public render() {
        return (
            <Container>
                <div className={"navbar-compensation"}/>
                <Row className={"mb-4"}>
                    <Col className={"d-flex justify-content-center"}>
                        <h1>{this.props.match.params.id}</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProjectBlog;
