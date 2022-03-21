import React from "react";
import {useParams} from "react-router-dom";

const RunningApplication = () => {
    let params = useParams();

    return <div className="running-application">
        Running application: [{params.id}]
    </div>;
};

export default RunningApplication;