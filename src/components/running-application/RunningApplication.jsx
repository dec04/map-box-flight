import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Transition} from "@headlessui/react";
import appStore from "../../js/store/ApplicationStore";
import {observer} from "mobx-react";
import {Config} from "../../../application.config";
import Log from "../../js/Log";

const RunningApplication = () => {
    let params = useParams();
    let navigate = useNavigate();
    let app;

    useEffect(() => {
        app = Config.applications.filter((el) => el.id === parseInt(params.id))[0];
        if (app === undefined) {
            navigate(`/`);
        }
        Log.d(`Open app: ${app.name}`);
    });

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
            {Config.applications.filter((el) => el.id === parseInt(params.id))[0]?.component}
        </Transition>
    </div>;
};

export default observer(RunningApplication);