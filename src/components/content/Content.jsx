import React from "react";
import Launcher from "../workspace/Workspace.jsx";
import {Route, Routes} from "react-router-dom";
import RunningApplication from "../running-application/RunningApplication.jsx";
import RouteLayout from "../route-layout/RouteLayout.jsx";

const Content = () => {
    return <div className="content">
        <Routes>
            <Route path="/" element={<RouteLayout/>}>
                <Route path="/" index element={<Launcher/>}/>
                <Route path="/app/:id" element={<RunningApplication/>}/>
                <Route path="*" element={<Launcher/>}/>
            </Route>
        </Routes>
    </div>;
};

export default Content;