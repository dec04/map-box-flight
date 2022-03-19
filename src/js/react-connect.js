import React from "react";
import * as ReactDOM from "react-dom";
import AppWrapper from "../components/app-wrapper/AppWrapper.jsx";
import TitleBar from "../components/titleBar/TitleBar.jsx";
import {Application} from "./Application";

Application.extendDomElements();
ReactDOM.render(<AppWrapper/>, document.getElementById("root-app"));
ReactDOM.render(<TitleBar/>, document.getElementById("title-bar-container"));