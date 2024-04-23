import React from "react";
import { Outlet } from "react-router-dom";

function EditorLayout() {
  return (
    <>
      <div>
        <p>burası editor layout</p>
        <Outlet/>
        <p>burası editor layout</p>

      </div>
    </>
  );
}

export default EditorLayout;
