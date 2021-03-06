import * as React from "react";
import RepositoryCard from "./RepositoryCard";
import { Row } from "reactstrap";
import RepositoryApi from "../../repositoryApi/RepositoryApi";
import { IRepository } from "../../repositoryApi/RepositoryTypes";
import { observer } from "mobx-react";
import LoadingIcon from "../../../resources/images/loader.gif";

interface IGalleryProps {
    galleryEntries?: string[];
}

/**
 * A gallery slideshow showing details of repositories.
 */
@observer
class Gallery extends React.Component<IGalleryProps> {
    public render() {
        return (
            <Row className={"justify-content-center"}>
                {this.renderCards()}
            </Row>
        );
    }

    /**
     * Renders a generic card. Will eventually render based on database contents.
     */
    private renderCards(): JSX.Element[] | JSX.Element {
        if (!RepositoryApi || RepositoryApi.currentRepositories.length === 0) {
            return <img src={LoadingIcon} alt={"loading..."}/>;
        }

        return RepositoryApi.currentRepositories.map((repository: IRepository) => {
            return <RepositoryCard key={repository.id} id={"" + repository.id} name={repository.name}
                                   repoUrl={repository.html_url} cloneUrl={repository.clone_url}
                                   language={repository.language}
                                   shortDescription={repository.description} longDescription={""}/>;
        });
    }
}

export default Gallery;
