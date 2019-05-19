import * as React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

interface GalleryProps {

}

class Gallery extends React.Component<GalleryProps> {

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