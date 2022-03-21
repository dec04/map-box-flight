import React from "react";
import {Link} from "react-router-dom";

const MenuItem = (props) => {

    const handleClick = (e) => {
        e.currentTarget.setAnimation("animate__animated animate__bounceIn animate__slow");
    };

    return <div className="menu-item">
        <Link to={`/app/${props.appId}`} onClick={(e) => handleClick(e)} type="button">{props.icon}{props.name}</Link>
    </div>;
};

export default MenuItem;