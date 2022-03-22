import React from "react";
import {useParams} from "react-router-dom";

const DataStore = () => {
    let params = useParams();

    return <div className="application-workspace">
        <div className="data-store">
            App ID: [{params.id}]
            <div>DataStore</div>
        </div>
    </div>;
};

export default DataStore;