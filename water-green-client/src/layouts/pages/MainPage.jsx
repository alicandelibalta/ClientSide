import React from "react";
// import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import SubHeader from "./ready-components/SubHeader";


//Burası Main page olacak.
//Burada her role göre farklı yerleri render edicez 
//

function MainPage() {
  return (
    <>
      <div>
        <MainHeader/>
        <SubHeader/>
        <div className="mainpage-sidebar">
          
        </div>
        


      </div>
    </>
  );
}

export default MainPage;
