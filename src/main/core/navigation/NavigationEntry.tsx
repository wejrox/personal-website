import * as React from "react";
import Col from "reactstrap/lib/Col";
import { PossiblePages, websiteStore } from "../../stores/WebsiteStore";
import { observer } from "mobx-react";

/**
 * @property {string} text  Text that is displayed.
 * @property {PossiblePages} destination  Page the user should be shown when they click the entry.
 */
interface INavigationEntryProps {
    text: string;
    destination: PossiblePages;
}

/**
 * A selectable Bootstrap column which sets the users desired page upon click.
 */
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

    /**
     * Sets the current page in the website store.
     */
    public processNavigationClick() {
        websiteStore.changePage(this.props.destination);
    }
}

export default NavigationEntry;
