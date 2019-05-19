import * as React from "react";
import {GoMarkGithub} from "react-icons/go";

export enum Icon {
    GoMarkGithub
}

class Icons {
    public static RenderIcon(icon: Icon): JSX.Element {
        switch (icon) {
            case Icon.GoMarkGithub:
                return <GoMarkGithub/>;
            default:
                console.error("Icon requested is not supported.");
                return <></>;
        }
    }
}

export default Icons;