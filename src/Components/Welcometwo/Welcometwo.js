import React from "react";
import Wrapper from "./Welcometwo.styled";
// import images
// import Monkeyimg2 from "../../images/monkeyimg2.png";
import Video from "../Video/Video";
function Welcometwo() {
  return (
    <Wrapper>
      <div className="card-2" id="story">
        <div className="card-video">
          <Video />
        </div>
        <div className="card-body">
          {/* <h5>Welcome</h5> */}
          <h4>Metamates Ape Lounge</h4>
          <p>
          Metamates Ape Lounge is a collection of 10,000 NFTs with 80 different characteristics representing every one of us in our daily life who are creative, dynamic, innovative, philanthropic, helping, and influencing power of positivity. 
          </p>
          <p>
          MMAL allows Metaverse gamers & NFT Collectors to own a unique NFT while also making the NFT space more diverse and inclusive.
          </p>
          <p>
          Join us in our journey as we celebrate the incredible Ape 2.0 on the blockchain while supporting the releief plan for Ukraine victims who we wanted to help through UNICEF and more NGOs.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Welcometwo;
