import React from "react";
import MainHeader from "./MainHeader";
import "./scss/articlePage.scss";

//Burada article'lar render edilecek.
//Her writer kendi article'ına buradan gidecek.
//Hangi article kimin diye route kısmında id ile gelmesi lazım.

function ArticlePage() {
  return (
    <>
      <div className="article-page-section">
        <MainHeader />
        <div className="article-page-container">
          <article>
            <h1 className="article-page-title">
              My First Article is going to published and Feminists doing nothing
            </h1>
            {/* <img src={require("./image/malcom.png")} alt="photo" /> */}
            <time datetime="">03.08.2024</time>
            <p className="article-page-content">
              Özür dilerim, yanlış anlaşılmalar herkesin başına gelebilir. Hayat
              bazen beklenmedik sürprizlerle doludur ve bizler de zaman zaman
              hatalar yapabiliriz. Önemli olan hatamızı kabul etmek ve gelecekte
              daha dikkatli olmaya çalışmaktır. Umarım affedilirim ve bir daha
              aynı hatayı yapmam. Herkesin hata yapabileceğini unutmamak
              gerekir. Her insan kusurludur ve önemli olan bu kusurları kabul
              etmek ve üzerinde çalışmaktır. Tekrar özür dilerim ve bu konuda
              anlayışınız için teşekkür ederim.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

export default ArticlePage;
