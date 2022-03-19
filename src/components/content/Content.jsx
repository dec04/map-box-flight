import React from "react";
import StatusBar from "../statusbar/StatusBar.jsx";
import Workspace from "../workspace/Workspace.jsx";
import NavBar from "../navbar/NavBar.jsx";

export default class Content extends React.Component {

    render() {
        return <div className="content">
            <StatusBar/>
            <Workspace/>
            <NavBar/>
        </div>;
    }
}