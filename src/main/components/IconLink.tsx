import * as React from "react";

interface IconLinkProps {
    link: string;
    icon: JSX.Element;
}

class IconLink extends React.Component<IconLinkProps> {

    public render() {
        return (
            <span className={"pr-2"}>
                <a href={this.props.link}>
                    {this.props.icon}
                </a>
            </span>
        );
    }
}

export default IconLink;