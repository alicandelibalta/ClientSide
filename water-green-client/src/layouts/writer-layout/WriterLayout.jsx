import React from "react";
import { Outlet } from "react-router-dom";

function WriterLayout() {
  return (
    <>
      <div>
        <p>burası writer layout</p>
        <Outlet/>
        <p>burası writer layout</p>

      </div>
    </>
  );
}

export default WriterLayout;
