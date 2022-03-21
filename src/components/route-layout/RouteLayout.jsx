import React from "react";
import StatusBar from "../statusbar/StatusBar.jsx";
import NavBar from "../navbar/NavBar.jsx";
import {Outlet} from "react-router-dom";

const RouteLayout = () => {
    return <div className="route-layout">
        <StatusBar/>
        <Outlet/>
        <NavBar/>
    </div>;
};

export default RouteLayout;