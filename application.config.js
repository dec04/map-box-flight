import json from "./package.json";
import React from "react";
import {FaConnectdevelop, FaFly} from "react-icons/fa";
import {IoSettingsOutline} from "react-icons/io5";
import {MdOutlineDataSaverOff} from "react-icons/md";
import {AiOutlineMoneyCollect} from "react-icons/ai";
import {GiDonut, GiMagnifyingGlass} from "react-icons/gi";

export class Config {
    // Main browser resolution (iPad Pro Gen 2)
    static applicationWidth = 834;
    static applicationHeight = 1112;
    static applicationMinWidth = 600;
    static applicationMinHeight = 850;
    static applicationMaxWidth = 1034;
    static applicationMaxHeight = 1312;

    static applicationTitle = json.productName;
    static applicationVersion = json.version;

    // Log colors
    static debugColor = "#2563eb";
    static errorColor = "#dc2626";
    static infoColor = "#0891b2";
    static warningColor = "#ca8a04";

    static notificationMaxCount = 6;

    static applications = [{
        id: 1,
        name: "One Agency",
        color: "blue",
        icon: <FaFly className="app-icon"/>,
    }, {
        id: 2,
        name: "Data Store",
        color: "amber",
        icon: <MdOutlineDataSaverOff className="app-icon"/>,
    }, {
        id: 3,
        name: "One Connect",
        color: "indigo",
        icon: <FaConnectdevelop className="app-icon"/>,
    }, {
        id: 4,
        name: "Stonefellers",
        color: "emerald",
        icon: <AiOutlineMoneyCollect className="app-icon"/>,
    }, {
        id: 5,
        name: "Browser",
        color: "lime",
        icon: <GiMagnifyingGlass className="app-icon"/>,
    }, {
        id: 6,
        name: "Settings",
        color: "neutral",
        icon: <IoSettingsOutline className="app-icon"/>,
    }, {
        id: 7,
        name: "Donuts",
        color: "rose",
        icon: <GiDonut className="app-icon"/>,
    }];

    // Menu items
    // Settings open settings app
    // About open Browser app with link to github
}