import React from "react";
import Desktop from "../desktop/Desktop.jsx";

export default class AppWrapper extends React.Component {

    render() {
        return <div className="app-wrapper">
            <Desktop/>
        </div>;
    }
}

