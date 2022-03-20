import React from "react";
import {MdImageNotSupported} from "react-icons/md";
import {IconContext} from "react-icons";


export default class DesktopApp extends React.Component {

    appName;
    color;
    icon;

    constructor(props) {
        super(props);

        this.appName = this.props.name ? this.props.name : "App name";
        this.color = this.props.color ? this.props.color : "gray";
        this.icon = this.props.icon ? this.props.icon : <MdImageNotSupported className="app-icon"/>;
    }

    makeCardColor() {
        switch (this.color) {
            case "blue":
                return "app-icon-card bg-sky-600 dark:bg-sky-800";
            case "amber":
                return "app-icon-card bg-amber-600 dark:bg-amber-800";
            case "indigo":
                return "app-icon-card bg-blue-600 dark:bg-blue-800";
            case "emerald":
                return "app-icon-card bg-emerald-600 dark:bg-emerald-800";
            case "lime":
                return "app-icon-card bg-lime-600 dark:bg-lime-800";
            case "neutral":
                return "app-icon-card bg-violet-600 dark:bg-violet-800";
            case "rose":
                return "app-icon-card bg-rose-600 dark:bg-rose-800";
            default:
                return "app-icon-card bg-gray-600 dark:bg-gray-800";
        }
    }

    makeIconColor() {
        switch (this.color) {
            case "blue":
                return "fill-sky-200 dark:fill-sky-400 stroke-sky-200 dark:stroke-sky-400";
            case "amber":
                return "fill-amber-200 dark:fill-amber-400 stroke-amber-200 dark:stroke-amber-400";
            case "indigo":
                return "fill-blue-200 dark:fill-blue-400 stroke-blue-200 dark:stroke-blue-400";
            case "emerald":
                return "fill-emerald-200 dark:fill-emerald-400 stroke-emerald-200 dark:stroke-emerald-400";
            case "lime":
                return "fill-lime-200 dark:fill-lime-400 stroke-lime-200 dark:stroke-lime-400";
            case "violet":
                return "fill-violet-200 dark:fill-violet-400 stroke-violet-200 dark:stroke-violet-400";
            case "rose":
                return "fill-rose-200 dark:fill-rose-400 stroke-rose-200 dark:stroke-rose-400";
            default:
                return "fill-gray-200 dark:fill-gray-400 stroke-gray-200 dark:stroke-gray-400";
        }
    }

    render() {
        return <div className="desktop-app">
            <div className="app-icon-wrapper">
                <div className="app-icon-gradient"/>
                <div className={this.makeCardColor()}>
                    <IconContext.Provider value={{className: this.makeIconColor()}}>
                        {this.icon}
                    </IconContext.Provider>
                </div>
            </div>
            <h4 className="app-name">{this.appName}</h4>
        </div>;
    }
}