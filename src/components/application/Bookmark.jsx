import React from "react";
import {HiOutlineExternalLink} from "react-icons/hi";

const Bookmark = (props) => {
    const makeCardColor = () => {
        switch (props.color) {
            case "blue":
                return "bookmark bg-sky-600 dark:bg-sky-800 border-sky-700 dark:border-sky-800";
            case "amber":
                return "bookmark bg-amber-600 dark:bg-amber-800 border-amber-700 dark:border-amber-800";
            case "red":
                return "bookmark bg-red-600 dark:bg-red-800 border-red-700 dark:border-red-800";
            case "emerald":
                return "bookmark bg-emerald-600 dark:bg-emerald-800 border-emerald-700 dark:border-emerald-800";
            default:
                return "bookmark bg-gray-600 dark:bg-gray-800 border-gray-700 dark:border-gray-800";
        }
    };

    const replaceContent = () => {
        console.log(props.url);
        document.getElementById("browser-webview").loadURL(props.url);
    };

    return <button onClick={replaceContent} type="button"
                   className={makeCardColor()}>{props.name}<HiOutlineExternalLink/></button>;
};

export default Bookmark;