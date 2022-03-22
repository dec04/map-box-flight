import React from "react";
import {useParams} from "react-router-dom";

const Stonefellers = () => {
    let params = useParams();

    return <div className="application-workspace">
        <div className="stonefellers">
            App ID: [{params.id}]
            <div>Stonefellers</div>
        </div>
    </div>;
};

export default Stonefellers;