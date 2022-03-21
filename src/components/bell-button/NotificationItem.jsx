import React from "react";
import {Link} from "react-router-dom";
import {Application} from "../../js/Application";
import {BsInfoSquare} from "react-icons/bs";
import appStore from "../../js/store/ApplicationStore";
import {observer} from "mobx-react";

const NotificationItem = (props) => {

    const handleClick = (e) => {
        appStore.makeNotificationRead(props.id);
    };

    const desktopApp = Application.getAppById(props.appId);

    return <div className="notification-item">
        <Link to={`/app/${props.appId}`} onClick={(e) => handleClick(e)} type="button">
            <div className="notification-header">
                {desktopApp[0]?.icon ? desktopApp[0]?.icon : <BsInfoSquare/>}
                {desktopApp[0]?.name ? desktopApp[0]?.name : "Information"}
            </div>
            <div
                className={appStore.notifications[props.id].isRead ? "notification-body" : "notification-body font-semibold"}>
                <h4>{props.title}</h4>
                <p>{props.message}</p>
            </div>
        </Link>
    </div>;
};

export default observer(NotificationItem);