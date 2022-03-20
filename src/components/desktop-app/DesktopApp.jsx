import React from "react";

export default class DesktopApp extends React.Component {

    appName;
    color;

    constructor(props) {
        super(props);

        this.appName = this.props.name ? this.props.name : "App name";
        this.color = this.props.color ? this.props.color : "gray";
    }

    makeAppColor() {
        switch (this.color) {
            case "blue":
                return "app-icon bg-sky-600 dark:bg-sky-800";
            case "amber":
                return "app-icon bg-amber-600 dark:bg-amber-800";
            case "indigo":
                return "app-icon bg-blue-600 dark:bg-blue-800";
            case "emerald":
                return "app-icon bg-emerald-600 dark:bg-emerald-800";
            case "lime":
                return "app-icon bg-lime-600 dark:bg-lime-800";
            case "neutral":
                return "app-icon bg-violet-600 dark:bg-violet-800";
            case "rose":
                return "app-icon bg-rose-600 dark:bg-rose-800";
            default:
                return "app-icon bg-gray-600 dark:bg-gray-800";

        }
    }

    render() {
        return <div className="desktop-app">
            <div className="app-icon-wrapper">
                <div className="app-icon-gradient"/>
                <div className={this.makeAppColor()}/>
            </div>
            <h4 className="app-name">{this.appName}</h4>
        </div>;
    }
}