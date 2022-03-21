import React from "react";
import TitleBar from "../titleBar/TitleBar.jsx";
import AppWrapper from "../app-wrapper/AppWrapper.jsx";

const App = () => {
    return <div className="app">
        <TitleBar/>
        <AppWrapper/>
    </div>;
};

export default App;
