import React, {Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";


export default class BottomMenu extends React.Component {

    showMenu(e) {
        e.currentTarget.setAnimation("animate__animated animate__bounceIn animate__slow");
    }

    render() {
        return <Popover className="bottom-menu">
            <Popover.Button>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => this.showMenu(e)} className="icon"
                     viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
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
                    Menu content
                </Popover.Panel>
            </Transition>

        </Popover>;
    }
}