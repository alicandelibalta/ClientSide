import React from "react";
// import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import SubHeader from "./ready-components/SubHeader";
import MainContentBigPhoto from "./ready-components/MainContentBigPhoto";
import "./scss/mainPage.scss";
import SideBarIcon from "./ready-components/SideBarIcon";

//Burası Main page olacak.
//Burada her role göre farklı yerleri render edicez
//

function MainPage() {
  return (
    <>
      <div>
        <MainHeader />
        <SubHeader />

        <div className="mainpage-maincontent">
          <MainContentBigPhoto />
          <div className="mainpage-sidebar">
            <SideBarIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
