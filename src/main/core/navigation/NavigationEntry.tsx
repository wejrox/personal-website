import * as React from "react";
import Col from "reactstrap/lib/Col";
import { PossiblePages, websiteStore } from "../../stores/WebsiteStore";
import { observer } from "mobx-react";

interface INavigationEntryProps {
    text: string;
    destination: PossiblePages;
}

@observer
class NavigationEntry extends React.Component<INavigationEntryProps> {
    constructor(props: INavigationEntryProps) {
        super(props);

        this.processNavigationClick = this.processNavigationClick.bind(this);
    }

    public render() {
        const isSelected: boolean = websiteStore.currentPage === this.props.destination;
        return (
            <Col className={"d-flex justify-content-center" + (isSelected ? " selected" : "")}
                 onClick={this.processNavigationClick}>
                {this.props.text}
            </Col>
        );
    }

    public processNavigationClick() {
        websiteStore.changePage(this.props.destination);
    }
}

export default NavigationEntry;