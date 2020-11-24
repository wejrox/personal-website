import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {App} from "./main/App";
import RepositoryApi from "./main/repositoryApi/RepositoryApi";
import {Global} from "@emotion/core";
import {bootstrapOverrides} from "./styles/bootstrapOverrides";
import {baseStyle} from "./styles/baseStyle";

RepositoryApi.updateRepositories();

// Render the app.
ReactDOM.render(
    <React.StrictMode>
        <Global styles={[bootstrapOverrides, baseStyle]}/>
        <App/>
    </React.StrictMode>,
    document.getElementById("root"),
);
