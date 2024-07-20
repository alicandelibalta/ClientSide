import React from "react";
// import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import SubHeader from "./ready-components/SubHeader";
import MainContentBigPhoto from "./ready-components/MainContentBigPhoto";
import "./scss/mainPage.scss";
import SideBarIcon from "./ready-components/SideBarIcon";
import RedPointNews from "./ready-components/RedPointNews";
import MainContentSmallPhoto from "./ready-components/MainContentSmallPhoto";
import SideBarBox from "./ready-components/SideBarBox";

//Burası Main page olacak.
//Burada her role göre farklı yerleri render edicez
//

function MainPage() {
  return (
    <>
      <div>
        <MainHeader />
        <SubHeader />
        <div className="mainpage-container">
          <div className="mainpage-maincontent">  {/* Buraya Main içerikleri direkt ataiblirsin. */}
            <MainContentBigPhoto />
            <RedPointNews />
            <MainContentSmallPhoto />
          </div>

          <div className="mainpage-sidebar"> {/* Buraya sidebar içerikleri direkt ataiblirsin. */}
            <SideBarIcon />
            <SideBarBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
