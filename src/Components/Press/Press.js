import React from "react";
import Wrapper from "./Press.styled";
// import images

import Img2 from "../../images/img8.png";
import Img3 from "../../images/img9.png";
import Img4 from "../../images/img10.png";

import Cointel from "../../images/cointel.png";
import Bitcoin from "../../images/bitcoin.png";
import Financial from "../../images/financial.png";
import Dcrypt from "../../images/decrypt.png"

import fox from "../../images/fox.png";
import ustoday from "../../images/ustoday.png";
import news from "../../images/news.jpg";
import journal from "../../images/journal.png";
import watch from "../../images/watch.png";
import benz from "../../images/benz.png";

function Press() {
  return (
    <Wrapper>
      <div className="section-title">
        <h2>Press</h2>
      </div>
      <div className="press-container-one">
       
        <div className="card">
          <img src={Img2} alt="logo" />
        </div>
        <div className="card">
          <img src={Img3} alt="logo" />
        </div>
      </div>
      <div className="press-container-two">
        <div className="card">
          <img src={Img4} alt="logo" />
        </div>
      

        <div className="card">
          <img src={Cointel} alt="logo" />
        </div>


        <div className="card">
          <img src={Bitcoin} alt="logo" />
        </div>


        <div className="card">
          <img src={Financial} alt="logo" />
        </div>

        <div className="card">
          <img src={Dcrypt} alt="logo" />
        </div>

        <div className="card">
            <img src={fox} alt="logo" />
          </div>

          <div className="card">
            <img src={ustoday} alt="logo" />
          </div>
          <div className="card">
            <img src={news} alt="logo" />
          </div>
          <div className="card">
            <img src={journal} alt="logo" />
          </div>
         
          <div className="card">
            <img src={watch} alt="logo" />
          </div>
         
         
      </div>
    </Wrapper>
  );
}

export default Press;
