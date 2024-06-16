import React from "react";
// import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

//Burası Main page olacak.
//Burada her role göre farklı yerleri render edicez 
//

function MainPage() {
  return (
    <>
      <div>
        <MainHeader/>
        
        <p>Main Page</p>

      </div>
    </>
  );
}

export default MainPage;
