import React from "react";
import {useParams} from "react-router-dom";

const Notifications = () => {
    let params = useParams();

    return <div className="application-workspace">
        <div className="notification">
            App ID: [{params.id}]
            <div>Notification</div>
        </div>
    </div>;
};

export default Notifications;