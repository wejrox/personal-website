import * as React from "react";
import Icons, {Icon} from "../Icons";

interface IconLinkProps {
    link: string;
    icon: Icon;
}

class IconLink extends React.Component<IconLinkProps> {

    public render() {
        return (
            <div>
                <a href={this.props.link}>
                    {Icons.RenderIcon(this.props.icon)}
                </a>
            </div>
        );
    }
}

export default IconLink;