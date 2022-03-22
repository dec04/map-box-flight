import React, {Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";
import appStore from "../../js/store/ApplicationStore";
import NotificationItem from "./NotificationItem.jsx";
import {Config} from "../../../application.config";
import {observer} from "mobx-react";

const BellButton = () => {

    const showNotificationMenu = (e) => {
        e.currentTarget.setAnimation("animate__animated animate__heartBeat");
    };

    return <Popover className="bell-button ml-4 mr-2">
        <Popover.Button>
            <Transition
                show={appStore.hasUnreadNotifications}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                    <span id="bell-ping" className="notification-warning-dot">
                        <span className="warning-ping-ring"/>
                        <span className="warning-ping-dot"/>
                    </span>
            </Transition>

            <svg onClick={(e) => showNotificationMenu(e)} xmlns="http://www.w3.org/2000/svg"
                 className="icon" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
        </Popover.Button>

        <Transition
            as={Fragment}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-90 opacity-0"
            enterTo="transform scale-100 opacity-300"
            leave="transition duration-300 ease-out"
            leaveFrom="transform scale-100 opacity-300"
            leaveTo="transform scale-90 opacity-0">
            <Popover.Panel className="popover-panel">
                <Popover.Button>
                    {appStore.notifications.slice(0, Config.notificationMaxCount).reverse().map((el) =>
                        <NotificationItem key={el.id} id={el.id} appId={el.app} title={el.title} message={el.message}
                                          icon={1}/>)}
                </Popover.Button>
            </Popover.Panel>
        </Transition>

    </Popover>;
};

export default observer(BellButton);