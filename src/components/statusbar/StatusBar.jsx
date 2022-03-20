import React from "react";
import appStore from "../../js/store/ApplicationStore";
import {observer} from "mobx-react";
import BellButton from "../bell-button/BellButton.jsx";

export default observer(class StatusBar extends React.Component {

    componentDidMount() {
        this.getTime();
        appStore.checkConnection();
        this.checkInternetConnection();
    }

    getTime() {
        setInterval(() => appStore.getTime(), 1000);
    }

    checkInternetConnection() {
        setInterval(() => appStore.checkConnection(), 30000);
    }

    render() {

        return <div className="status-bar">
            <div className="status-bar-network-group">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="bevel"
                          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                </svg>
                <span>{appStore.intenret}</span>
            </div>
            <div className="status-bar-notification-group">
                <span>{`${appStore.localTime} - ${appStore.utcTime} GMT`}</span>
                <BellButton/>
            </div>
        </div>;
    }
});