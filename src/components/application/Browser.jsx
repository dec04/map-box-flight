import React from "react";
import Bookmark from "./Bookmark.jsx";
import {CgSpinnerTwoAlt} from "react-icons/cg";
import {Config} from "../../../application.config";

const Browser = () => {
    return <div className="browser">
        <div className="bookmarks">
            {Config.bookmarks.map(el => <Bookmark color={el.color} url={el.url} name={el.name} key={el.id}/>)}
        </div>
        <div className="web-content">
            <CgSpinnerTwoAlt/>
            <webview id="browser-webview" src="https://www.github.com/dec04"/>
        </div>
    </div>;
};

export default Browser;