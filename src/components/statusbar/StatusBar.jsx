import React from "react";
import appStore from "../../js/store/ApplicationStore";
import {observer} from "mobx-react";
import BellButton from "../bell-button/BellButton.jsx";
import {BsWifi, BsWifiOff} from "react-icons/bs";

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
        setInterval(() => appStore.checkConnection(), 10000);
    }

    render() {

        return <div className="status-bar">
            <div className="status-bar-network-group">
                {appStore.isOnline ? <BsWifi className="icon stroke-1 mr-2"/> :
                    <BsWifiOff className="icon stroke-1 mr-2"/>}
                <span>{appStore.networkName}</span>
            </div>
            <div className="status-bar-notification-group">
                <span>{`${appStore.localTime} - ${appStore.utcTime} GMT`}</span>
                <BellButton/>
            </div>
        </div>;
    }
});