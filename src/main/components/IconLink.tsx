import * as React from "react";

/**
 * @property {string} link       Web-link that this icon points to.
 * @property {JSX.Element} icon  Icon that the user should click to be redirected.
 */
interface IIconLinkProps {
    link: string;
    icon: JSX.Element;
}

/**
 * An clickable icon which sends the user to the link provided.
 */
class IconLink extends React.Component<IIconLinkProps> {

    public render() {
        return (
            <span className={"pr-2"}>
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    {this.props.icon}
                </a>
            </span>
        );
    }
}

export default IconLink;
