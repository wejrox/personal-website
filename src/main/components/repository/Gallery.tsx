import * as React from "react";
import RepositoryCard from "./RepositoryCard";
import { Row } from "reactstrap";
import RepositoryApi from "../../repositoryApi/RepositoryApi";
import { IRepository } from "../../repositoryApi/RepositoryTypes";
import { observer } from "mobx-react";

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
            <Row className={"pl-3 justify-content-center"}>
                {this.renderCards()}
            </Row>
        );
    }

    /**
     * Renders a generic card. Will eventually render based on database contents.
     */
    private renderCards(): JSX.Element[] {
        if (!RepositoryApi || RepositoryApi.currentRepositories.length === 0) {
            return [];
        }

        return RepositoryApi.currentRepositories.map((repository: IRepository) => {
            return <RepositoryCard id={"" + repository.id} title={repository.name} url={repository.html_url}
                                   shortDescription={repository.description} longDescription={""} image={""}/>;
        });
    }
}

export default Gallery;
