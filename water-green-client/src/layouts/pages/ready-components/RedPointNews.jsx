import React from "react";
import "../scss/redPointNews.scss";


function RedPointNews() {
  const redpointnew = "Red Point News! Today is The Big Day.";
  return (
    <>
      <div className="red-point-news-container">
        <hr />
        <a href="/">{redpointnew}</a>
        <hr />
      </div>

    </>
  );
}

export default RedPointNews;
