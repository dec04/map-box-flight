import React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/app/App.jsx";
import UserInterface from "./UserInterface";

UserInterface.extendDomElements();
ReactDOM.render(<App/>, document.getElementById("root-app"));
