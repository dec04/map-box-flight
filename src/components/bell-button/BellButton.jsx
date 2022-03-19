import React, {Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";


export default class BellButton extends React.Component {

    showNotification(e) {
        e.currentTarget.setAnimation("animate__animated animate__heartBeat");
    }

    render() {
        return <Popover className="bell-button ml-4 mr-2">
            <Popover.Button>
                <svg onClick={(e) => this.showNotification(e)} xmlns="http://www.w3.org/2000/svg"
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
                    Content bell notifications
                </Popover.Panel>
            </Transition>

        </Popover>;
    }
}