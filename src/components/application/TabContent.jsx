import React from "react";
import {Transition} from "@headlessui/react";

const TabContent = (props) => {

    return <Transition
        appear={true}
        enter="transition duration-500 ease-out"
        enterFrom="scale-75 opacity-0"
        enterTo="scale-100 opacity-100"
        className="tab-content">
        {props.children}
    </Transition>;
};

export default TabContent;