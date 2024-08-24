import React from "react";
import { useNavigate } from "react-router-dom";
import "./scss/mainHeader.scss";
import loginIcon from "./image/login.svg";

function MainHeader() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); 

    const handleLoginClick = () => {
        navigate("/account/login");
    };

    const handleProfileClick = () => {
        navigate("/profile"); //Profil sayfasına gider ama yok şuan :)
    };

    return (
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

                    {token ? (
                        <button
                            className="mainheader-profile-button"
                            onClick={handleProfileClick}
                        >
                            Profile
                        </button>
                    ) : (
                        <button
                            className="mainheader-login-button"
                            onClick={handleLoginClick}
                        >
                            <img src={loginIcon} alt="Icon" />
                            <a>Login</a>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default MainHeader;
