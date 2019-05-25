import * as React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

interface IGalleryProps {
    galleryEntries?: string[];
}

/**
 * A gallery slideshow showing details of repositories.
 */
class Gallery extends React.Component<IGalleryProps> {

    public render() {
        return (
            <Row>
                <Col>
                    Gallery
                </Col>
            </Row>
        );
    }
}

export default Gallery;
