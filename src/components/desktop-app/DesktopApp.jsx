import React from "react";
import {MdImageNotSupported} from "react-icons/md";
import {IconContext} from "react-icons";
import {Transition} from "@headlessui/react";
import {useNavigate} from "react-router-dom";

const DesktopApp = (props) => {

    let navigate = useNavigate();
    let appName = props.name ? props.name : "App name";
    let color = props.color ? props.color : "gray";
    let icon = props.icon ? props.icon : <MdImageNotSupported className="app-icon"/>;

    const makeCardColor = () => {
        switch (color) {
            case "blue":
                return "app-icon-card bg-sky-600 dark:bg-sky-800";
            case "amber":
                return "app-icon-card bg-amber-600 dark:bg-amber-800";
            case "indigo":
                return "app-icon-card bg-blue-600 dark:bg-blue-800";
            case "emerald":
                return "app-icon-card bg-emerald-600 dark:bg-emerald-800";
            case "lime":
                return "app-icon-card bg-lime-600 dark:bg-lime-800";
            case "neutral":
                return "app-icon-card bg-violet-600 dark:bg-violet-800";
            case "rose":
                return "app-icon-card bg-rose-600 dark:bg-rose-800";
            default:
                return "app-icon-card bg-gray-600 dark:bg-gray-800";
        }
    };

    const makeIconColor = () => {
        switch (color) {
            case "blue":
                return "fill-sky-200 dark:fill-sky-400 stroke-sky-200 dark:stroke-sky-400";
            case "amber":
                return "fill-amber-200 dark:fill-amber-400 stroke-amber-200 dark:stroke-amber-400";
            case "indigo":
                return "fill-blue-200 dark:fill-blue-400 stroke-blue-200 dark:stroke-blue-400";
            case "emerald":
                return "fill-emerald-200 dark:fill-emerald-400 stroke-emerald-200 dark:stroke-emerald-400";
            case "lime":
                return "fill-lime-200 dark:fill-lime-400 stroke-lime-200 dark:stroke-lime-400";
            case "violet":
                return "fill-violet-200 dark:fill-violet-400 stroke-violet-200 dark:stroke-violet-400";
            case "rose":
                return "fill-rose-200 dark:fill-rose-400 stroke-rose-200 dark:stroke-rose-400";
            default:
                return "fill-gray-200 dark:fill-gray-400 stroke-gray-200 dark:stroke-gray-400";
        }
    };

    const handleClick = (e) => {
        e.currentTarget.setAnimation("animate__animated animate__bounceOut animate__slow").then(() => {
            navigate("/run");
        });
    };

    return <div className="desktop-app">
        <Transition
            appear={true}
            show={true}
            enter="transition duration-300 delay-300"
            enterFrom="scale-0"
            enterTo="scale-110">
            <button onClick={(e) => handleClick(e)} className="app-icon-wrapper">
                {/*<div className="app-icon-open-layer"/>*/}
                <div className="app-icon-gradient"/>
                <div className={makeCardColor()}>
                    <IconContext.Provider value={{className: makeIconColor()}}>
                        {icon}
                    </IconContext.Provider>
                </div>
            </button>
        </Transition>

        <Transition
            appear={true}
            show={true}
            enter="transition-opacity duration-300 delay-[900ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100">
            <h4 className="app-name">{appName}</h4>
        </Transition>
    </div>;
};

export default DesktopApp;