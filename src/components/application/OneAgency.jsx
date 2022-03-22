import React from "react";
import {useParams} from "react-router-dom";

const OneAgency = () => {
    let params = useParams();

    return <div className="application-workspace">
        <div className="one-agency">
            App ID: [{params.id}]
            <div>OneAgency</div>
        </div>
    </div>;
};

export default OneAgency;