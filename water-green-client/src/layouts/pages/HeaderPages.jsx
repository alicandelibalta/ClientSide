import React from "react";
import { useState } from "react";
import MainHeader from "./MainHeader";
import "./scss/headerPages.scss";

function HeaderPages() {
  const [pageTitle, setPageTitle] = useState("");

  const handleTitleChange = (title) => {
    setPageTitle(title); 
  };

  

  return (
    <>
      <div className="header-pages-section">
        <MainHeader /> 
      </div>
    </>
  );
}

export default HeaderPages;
