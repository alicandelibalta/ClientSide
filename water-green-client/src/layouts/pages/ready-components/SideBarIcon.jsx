import React from "react";
import "../scss/sideBarIcon.scss";
import sideBarIcon from "../image/monkey.svg";

function SideBarIcon() {
  const sidebarnew = "My SideBar Activity Shows Their selves here";
  return (
    <>
      <div className="sidebar-container">

        <div className="sidebar-icon-card">
          <img src={sideBarIcon} alt="icon" className="sidebar-icon" />
          <a href="/">{sidebarnew}</a>
        </div>
        <div className="sidebar-icon-card">
          <img src={sideBarIcon} alt="icon" className="sidebar-icon" />
          <a href="/">{sidebarnew}</a>
        </div>
        <div className="sidebar-icon-card">
          <img src={sideBarIcon} alt="icon" className="sidebar-icon" />
          <a href="/">{sidebarnew}</a>
        </div>


      
      </div>
    </>
  );
}

export default SideBarIcon;
