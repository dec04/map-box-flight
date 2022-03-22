import React from "react";
import {useParams} from "react-router-dom";

const Settings = () => {
    let params = useParams();

    return <div className="application-workspace">
        <div className="settings">
            App ID: [{params.id}]
            <div>Settings</div>
        </div>
    </div>;
};

export default Settings;