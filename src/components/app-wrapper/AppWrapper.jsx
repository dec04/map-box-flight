import React from "react";
import Desktop from "../desktop/Desktop.jsx";
import {observer} from "mobx-react";

export default observer(class AppWrapper extends React.Component {

    render() {
        return <div className="app-wrapper">
            <Desktop/>
        </div>;
    }
});

