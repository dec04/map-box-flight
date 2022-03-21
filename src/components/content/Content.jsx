import React from "react";
import Launcher from "../workspace/Workspace.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import RunningApplication from "../running-application/RunningApplication.jsx";
import RouteLayout from "../route-layout/RouteLayout.jsx";
import appStore from "../../js/store/ApplicationStore";

const Content = () => {
    const location = useLocation();
    appStore.setOpenAppStatus(location.pathname);

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