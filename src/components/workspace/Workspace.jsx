import React from "react";
import DesktopApp from "../desktop-app/DesktopApp.jsx";
import {Config} from "../../../application.config";

const Workspace = () => {
    return <div className="workspace">
        {Config.applications.filter(el => el.showOnMainScreen).map(el =>
            <DesktopApp appId={el.id} key={el.id} name={el.name} color={el.color} icon={el.icon}/>)}
    </div>;
};

export default Workspace;