import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import { observable } from "mobx";
import { observer } from "mobx-react";
import ReactMarkdown from "react-markdown";
import RepositoryApi from "../repositoryApi/RepositoryApi";

/**
 * Holds a definition for the parameters to expect when this component is routed to.
 *
 * @property {string} id    ID of the GitHub project.
 * @property {string} name  Name of the project as it appears in the GitHub URL.
 */
interface IMatchParams {
    id: string;
    name: string;
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
@observer
class ProjectBlog extends React.Component<IProjectBlogProps> {
    @observable
    private projectRundown: string = "";

    constructor(props: IProjectBlogProps) {
        super(props);
        RepositoryApi.getProjectRundown(this.props.match.params.name)
            .then((promise) => this.projectRundown = promise);
    }

    public render() {
        return (
            <Container>
                <div className={"navbar-compensation"}/>
                <Row className={"mb-4"}>
                    <Col className={"d-flex justify-content-center"}>
                        <h1>{this.props.match.params.name}</h1>
                    </Col>
                </Row>
                <ReactMarkdown source={this.projectRundown}/>
            </Container>
        );
    }
}

export default ProjectBlog;