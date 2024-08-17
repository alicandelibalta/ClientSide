import React from "react";
import "./scss/mainHeader.scss";
import loginIcon from "./image/login.svg";

import { useNavigate } from "react-router-dom";

function MainHeader() {
  let navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/account/login");
  };

  return (
    <>
      <nav className="mainheader-section">
        <div className="header-list">
          <a className="header-logo" href="/">
            WG
          </a>
          <a className="header-logo-dot">o</a>
          <div className="pages-section">
            <a href="/header-pages" className="header-list-item">
              Genuine
            </a>
            <a href="/header-pages" className="header-list-item">
              Sustain
            </a>
            <a href="/header-pages" className="header-list-item">
              Recycle
            </a>

            <button
              className="mainheader-login-button"
              onClick={handleLoginClick}
            >
              <img src={loginIcon} alt="Icon" />
              <a>Login</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainHeader;
