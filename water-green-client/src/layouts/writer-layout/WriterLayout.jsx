import React from "react";
import { Outlet } from "react-router-dom";
import "./scss/writerLayout.scss";
import { Button } from "@mui/material";
import MainHeader from "../pages/MainHeader";

function WriterLayout() {
  return (
    <>
      <MainHeader/>
      <div className="writer-layout-container">
        <div className="writer-layout-sidebar">
          <img src={require("./img/woman.jpg")} alt="" />
          <ol className="writer-layout-sidebar-list">
            <Button className="writer-sidebar-list-button" href="/writer/writer-article">My Articles</Button>
            <Button className="writer-sidebar-list-button" href="/writer/writer-info">My Info</Button>
            <Button className="writer-sidebar-list-button" href="/writer/create-article">Create Article</Button>

          </ol>
        </div>
        <div className="writer-layout-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default WriterLayout;
