import React from "react";
import DesktopApp from "../desktop-app/DesktopApp.jsx";

export default class Workspace extends React.Component {

    render() {
        return <div className="workspace">
            <DesktopApp name="One Agency" color="blue"/>
            <DesktopApp name="Data Store" color="amber"/>
            <DesktopApp name="One Connect" color="indigo"/>
            <DesktopApp name="Stonefellers" color="emerald"/>
            <DesktopApp name="Browser" color="lime"/>
            <DesktopApp name="Settings" color="neutral"/>
            <DesktopApp name="Donuts" color="rose"/>
        </div>;
    }
}