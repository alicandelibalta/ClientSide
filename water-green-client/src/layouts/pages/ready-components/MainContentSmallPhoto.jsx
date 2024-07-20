import React from "react";
import "../scss/mainContentSmallPhoto.scss";

function MainContentSmallPhoto() {
  const newsTitle = "My First Article is Going to be Published";
  const newsAltText =
    "This is my first article and ı am so proud of it. I dont know maybe others can proud of me";
  const writer = "Emilia Baileys";
  return (
    <>
      <div className="small-photo-article-card-container">
        <div className="small-photo-article-card">
          <div className="small-photo">
            <img src={require("../image/citysky.png")} alt="" />
          </div>
          <div className="small-photo-text">
            <h4>{writer}</h4>
            <a href="/">{newsTitle}</a>
            <h4 className="small-photo-altText">{newsAltText}</h4>
          </div>
        </div>
        <div className="small-photo-article-card">
          <div className="small-photo">
            <img src={require("../image/citysky.png")} alt="" />
          </div>
          <div className="small-photo-text">
            <h4>{writer}</h4>
            <a href="/">{newsTitle}</a>
            <h4 className="small-photo-altText">{newsAltText}</h4>
          </div>
        </div>
        <div className="small-photo-article-card">
          <div className="small-photo">
            <img src={require("../image/citysky.png")} alt="" />
          </div>
          <div className="small-photo-text">
            <h4>{writer}</h4>
            <a href="/">{newsTitle}</a>
            <h4 className="small-photo-altText">{newsAltText}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContentSmallPhoto;
