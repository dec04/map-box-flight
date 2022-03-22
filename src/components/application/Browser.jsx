import React from "react";
import {useParams} from "react-router-dom";

const Browser = () => {
    let params = useParams();

    return <div className="application-workspace">
        <div className="browser">
            App ID: [{params.id}]
            <div>Browser</div>
        </div>
    </div>;
};

export default Browser;