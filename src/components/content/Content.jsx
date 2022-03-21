import React from "react";
import Workspace from "../workspace/Workspace.jsx";
import {Route, Routes} from "react-router-dom";
import RunningApplication from "../running-application/RunningApplication.jsx";
import RouteLayout from "../route-layout/RouteLayout.jsx";

const Content = () => {
    return <div className="content">
        <Routes>
            <Route path="/" element={<RouteLayout/>}>
                <Route path="/" index element={<Workspace/>}/>
                <Route path="run" element={<RunningApplication/>}/>
            </Route>
        </Routes>
    </div>;
};

export default Content;