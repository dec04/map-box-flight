import React from "react";
import appStore from "../../js/store/ApplicationStore";
import {observer} from "mobx-react";

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
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon ml-4 mr-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
                </button>
            </div>
        </div>;
    }
});