import React from "react";
import "../scss/mainContents.scss";

function MainContentBigPhoto () {


    
    const newsTitle = "My First Article is Going to be Published"
    const newsAltText = "This is my first article and ı am so proud of it. I dont know maybe others can proud of me"


    return (
        <>
            <div className="big-photo-article-card-container">
                <div className="big-photo">
                    <img src={require("../image/citysky.png")} alt="" />
                </div>
                <div className="big-photo-text">
                    <a href="/">{newsTitle}</a>
                    <h4 className="big-photo-altText">{newsAltText}</h4>
                </div>
            </div>
        
        </>
    );
}

export default MainContentBigPhoto;