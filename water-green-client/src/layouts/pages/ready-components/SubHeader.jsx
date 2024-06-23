import React from "react";
import "../scss/subHeader.scss";
import newsIcon from "../image/bookmark_3916593.svg";

function SubHeader() {
  const news = "Today's War";

  return [
    <>
      <div className="subheader-container">
        <div className="icon-news-card">
          <img src={newsIcon} alt="Icon" />
          <a href="">{news}</a>
        </div>
        <div className="icon-news-card">
          <img src={newsIcon} alt="Icon" />
          <a href="">{news}</a>
        </div>
        <div className="icon-news-card">
          <img src={newsIcon} alt="Icon" />
          <a href="">{news}</a>
        </div>
      </div>
    </>,
  ];
}

export default SubHeader;
