import React from "react";
import TitleBar from "../titleBar/TitleBar.jsx";
import AppWrapper from "../app-wrapper/AppWrapper.jsx";

export default class App extends React.Component {

    render() {
        return <div className="app">
            <TitleBar/>
            <AppWrapper/>
        </div>;
    }
}