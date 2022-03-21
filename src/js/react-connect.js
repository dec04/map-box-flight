import React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/app/App.jsx";
import UserInterface from "./UserInterface";
import {HashRouter} from "react-router-dom";

UserInterface.extendDomElements();
ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById("root-app"));
