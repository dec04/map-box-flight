import React from "react";
import DesktopApp from "../desktop-app/DesktopApp.jsx";
import {FaConnectdevelop, FaFly} from "react-icons/fa";
import {IoSettingsOutline} from "react-icons/io5";
import {MdOutlineDataSaverOff} from "react-icons/md";
import {AiOutlineMoneyCollect} from "react-icons/ai";
import {GiDonut, GiMagnifyingGlass} from "react-icons/gi";

export default class Workspace extends React.Component {

    render() {
        return <div className="workspace">
            <DesktopApp name="One Agency" color="blue" icon={<FaFly className="app-icon"/>}/>
            <DesktopApp name="Data Store" color="amber" icon={<MdOutlineDataSaverOff className="app-icon"/>}/>
            <DesktopApp name="One Connect" color="indigo" icon={<FaConnectdevelop className="app-icon"/>}/>
            <DesktopApp name="Stonefellers" color="emerald" icon={<AiOutlineMoneyCollect className="app-icon"/>}/>
            <DesktopApp name="Browser" color="lime" icon={<GiMagnifyingGlass className="app-icon"/>}/>
            <DesktopApp name="Settings" color="neutral" icon={<IoSettingsOutline className="app-icon"/>}/>
            <DesktopApp name="Donuts" color="rose" icon={<GiDonut className="app-icon"/>}/>
        </div>;
    }
}