import * as React from "react";
import RepositoryCard from "./RepositoryCard";
import { Row } from "reactstrap";

interface IGalleryProps {
    galleryEntries?: string[];
}

/**
 * A gallery slideshow showing details of repositories.
 */
class Gallery extends React.Component<IGalleryProps> {

    public render() {
        return (
            <Row className={"pl-3 justify-content-center"}>
                {this.renderCard()}
                {this.renderCard()}
                {this.renderCard()}
                {this.renderCard()}
                {this.renderCard()}
            </Row>
        );
    }

    private renderCard(): JSX.Element {
        return (
            <RepositoryCard id={"asdf"} title={"A card"} url={"https://www.google.com"}
                            shortDescription={"This is a repository."}
                            longDescription={"This is a long description of a repository."}
                            image={"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" +
                            "?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"}/>
        );
    }
}

export default Gallery;
