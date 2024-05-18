import React from "react";
import "./scss/mainheader.scss";

function MainHeader() {
  return (
    <>
      <nav className="mainheader-section">
        <div className="header-list">
   
          <a className="header-logo" href="/">
            <img src={require("./image/headerlogo.png")} alt="WG" />
          </a>

          <div className="pages-section">
            <a href="#" className="header-list-item">
              Articles
            </a>
            <a href="#" className="header-list-item">
              Genuine
            </a>
            <a href="#" className="header-list-item">
              Sustain
            </a>
            <a href="#" className="header-list-item">
              Recycle
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainHeader;
