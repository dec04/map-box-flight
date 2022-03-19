import React from "react";
import * as ReactDOM from "react-dom";
import {Application} from "./Application";
import App from "../components/app/App.jsx";

Application.extendDomElements();
ReactDOM.render(<App/>, document.getElementById("root-app"));
