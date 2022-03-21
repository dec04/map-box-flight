import React from "react";
import BottomMenu from "../bottom-menu/BottomMenu.jsx";
import {useNavigate} from "react-router-dom";
import appStore from "../../js/store/ApplicationStore";

const NavBar = () => {

    let navigate = useNavigate();

    const goBack = (e) => {
        e.currentTarget.setAnimation("animate__animated animate__bounceIn animate__slow");
        navigate(-1);
    };

    const goHome = (e) => {
        e.currentTarget.setAnimation("animate__animated animate__bounceIn animate__slow");
        navigate("/");
    };

    let openAppGradient = "bg-gradient-to-t from-gray-500 dark:from-gray-800";

    return <div className={`nav-bar ${appStore.isOpenApp && openAppGradient}`}>
        <button type="button" onClick={(e) => goBack(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
        </button>
        <button type="button" onClick={(e) => goHome(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
        </button>
        <BottomMenu/>
    </div>;
};

export default NavBar;