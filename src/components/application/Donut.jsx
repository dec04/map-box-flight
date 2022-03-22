import React from "react";
import {useParams} from "react-router-dom";

const Donut = () => {
    let params = useParams();

    return <div className="application-workspace">
        <div className="donut">
            App ID: [{params.id}]
            <div>Donut</div>
        </div>
    </div>;
};

export default Donut;