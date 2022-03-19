import React from "react";
import {Config} from "../../../application.config";
import {Application} from "../../js/Application";

const {ipcRenderer} = window.require("electron");

export default class TitleBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: localStorage.theme
        };

        this.changeTheme = this.changeTheme.bind(this);
    }

    closeApplication() {
        ipcRenderer.send("close-me");
    }

    changeTheme() {
        // TODO: change state of component, re-render sgv

        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
            this.setState({theme: "light"});
        } else {
            localStorage.theme = "dark";
            this.setState({theme: "dark"});
        }
        Application.setTheme();
    }

    render() {
        let svgMoon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>;

        let svgSun = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>;

        return <div id="title-bar" className="draggable">
            <span id="title-bar-header" className="draggable">{Config.applicationTitle}</span>
            <div id="app-control-buttons-group">
                <button onClick={this.changeTheme} type="button" className="non-draggable">
                    {localStorage.theme === "dark" ? svgSun : svgMoon}
                </button>
                <button onClick={this.closeApplication} type="button" id="close-app-button" className="non-draggable">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

        </div>;
    }
}

