import React from "react";
import {useParams} from "react-router-dom";
import {Transition} from "@headlessui/react";
import appStore from "../../js/store/ApplicationStore";

const RunningApplication = () => {
    let params = useParams();

    return <div className="running-application">
        <Transition
            appear={true}
            show={appStore.isOpenApp}
            enter="transition duration-300 ease-out"
            enterFrom="scale-0 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="application-workspace">
                Running application: [{params.id}]
            </div>
        </Transition>
    </div>;
};

export default RunningApplication;