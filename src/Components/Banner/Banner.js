import React from "react";
import Wrapper from "./Banner.styled";

// import image
import Bannerimg from "../../images/bannerimg4.png";

function Banner() {
  return (
    <Wrapper>
      <div className="header">
        <h1>welcome to Metamates Ape Lounge</h1>
        <h2>Join the GREATEST NFT UTILITY EVER</h2>
      </div>
      <div className="body">
        <img src={Bannerimg} alt="banner" />
      </div>
    </Wrapper>
  );
}

export default Banner;
