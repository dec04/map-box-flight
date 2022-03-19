import React from "react";

export default class NavBar extends React.Component {

    goBack(e) {
        e.currentTarget.setAnimation("animate__animated animate__bounceIn animate__slow");
    }

    goHome(e) {
        e.currentTarget.setAnimation("animate__animated animate__bounceIn animate__slow");
    }

    openMenu(e) {
        e.currentTarget.setAnimation("animate__animated animate__bounceIn animate__slow");
    }

    render() {
        return <div className="nav-bar">
            <button type="button" onClick={(e) => this.goBack(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
            <button type="button" onClick={(e) => this.goHome(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
            </button>
            <button type="button" onClick={(e) => this.openMenu(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                </svg>
            </button>
        </div>;
    }
}