import React from "react";
import {useParams} from "react-router-dom";

const OneConnect = () => {
    let params = useParams();

    return <div className="application-workspace">
        <div className="one-connect">
            App ID: [{params.id}]
            <div>OneConnect</div>
        </div>
    </div>;
};

export default OneConnect;