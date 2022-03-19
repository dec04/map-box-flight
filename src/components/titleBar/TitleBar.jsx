import React from "react";
import {Config} from "../../../application.config";
import {Application} from "../../js/Application";
import Log from "../../js/Log";
import UserInterface from "../../js/UserInterface";

const {ipcRenderer, remote} = window.require("electron");

export default class TitleBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: localStorage.theme,
            alwaysOnTop: false
        };

        this.setAlwaysOnTop = this.setAlwaysOnTop.bind(this);
        this.render = this.render.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.alwaysOnTop !== this.state.alwaysOnTop) {
            Log.i(`Always on top state: ${this.state.alwaysOnTop}`);
            ipcRenderer.send("always-on-top", this.state.alwaysOnTop);
        }
    }

    setAlwaysOnTop(e) {
        UserInterface.animateElement(e.currentTarget.firstChild, "animate__animated animate__heartBeat").then(() => {
            this.setState({alwaysOnTop: !this.state.alwaysOnTop});
        });
    }

    changeTheme(e) {
        UserInterface.animateElement(e.currentTarget.firstChild, "animate__animated animate__bounceOut").then(() => {
            if (localStorage.theme === "dark") {
                localStorage.theme = "light";
                this.setState({theme: "light"});
            } else {
                localStorage.theme = "dark";
                this.setState({theme: "dark"});
            }
            Application.setTheme();
        });


    }

    closeApplication(e) {
        UserInterface.animateElement(e.currentTarget.firstChild, "animate__animated animate__bounceOut").then(() => {
            ipcRenderer.send("close-me");
        });
    }

    render() {
        const svgPaperClip = <svg xmlns="http://www.w3.org/2000/svg"
                                  id="svgPaperClip"
                                  className={this.state.alwaysOnTop ? "highlight" : ""}
                                  viewBox="0 0 24 24" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
        </svg>;

        const svgMoon = <svg xmlns="http://www.w3.org/2000/svg"
                             id="svgMoon" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>;

        const svgSun = <svg xmlns="http://www.w3.org/2000/svg"
                            id="svgSun" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>;

        return <div id="title-bar" className="draggable">
            <div id="app-title-bar-info-group">
                <span id="title-bar-header" className="draggable">{Config.applicationTitle}</span>
                <span id="title-bar-version" className="draggable">version: {Config.applicationVersion}</span>
            </div>
            <div id="app-control-buttons-group">
                <button onClick={(e) => this.setAlwaysOnTop(e)} type="button" className="non-draggable">
                    {svgPaperClip}
                </button>
                <button onClick={(e) => this.changeTheme(e)} type="button" className="non-draggable">
                    {localStorage.theme === "dark" ? svgSun : svgMoon}
                </button>
                <button onClick={(e) => this.closeApplication(e)} type="button" id="close-app-button"
                        className="non-draggable">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

        </div>;
    }
}

