import React from "react";
import "../scss/sideBarBox.scss"

function SideBarBox () {

    const writer = "James Bond"
    const news = "My Sider Article Will Be Rise In Here"

    return (
        <>
            <div className="sidebar-box-container">
                <div className="sidebar-box-card">
                    <h4>{writer}</h4>
                    <a href="/">{news}</a>
                </div>
                <div className="sidebar-box-card">
                    <h4>{writer}</h4>
                    <a href="/">{news}</a>
                </div>
                <div className="sidebar-box-card">
                    <h4>{writer}</h4>
                    <a href="/">{news}</a>
                </div>
                <div className="sidebar-box-card">
                    <h4>{writer}</h4>
                    <a href="/">{news}</a>
                </div>
            </div>
        </>

    )
}

export default SideBarBox; 