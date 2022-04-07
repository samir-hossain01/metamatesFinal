import React, { useState } from "react";
import Wrapper from "./Welcome.styled";
// import images
import MinImg from"../../images/mintgif.gif"
import { Icon } from "@iconify/react";
function Welcome() {
  // counter function
  const [counter, setCounter] = useState(1);
  function decrementCounter() {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <Wrapper>
      <div className="card" id="welcome">
        
        <div className="card-body">
          <h4>Metamates Ape Lounge</h4>
          <div className="counter">
            <button onClick={decrementCounter}>
              <Icon icon="akar-icons:minus" />
            </button>

            <div className="inputField">{counter}</div>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              <Icon icon="ant-design:plus-outlined" />
            </button>
          </div>
          <button className="btn welcomeBtn">Mint Now</button>

          <p>We are the Ape 2.0 NFT and creating the most powerful & valuable NFT utility of Planet Earth. We also take the pride of offering the #1 Greatest one and only Michelin grade of Smart Contracts saving gas fees while minting your NFT. Our goal is to deliver everyone the right of owning an NFT that creates value and make them feel the best investment of their life. </p>
        </div>
        
        <div className="card-img">
          <img src={MinImg} alt="nft" />
        </div>
      </div>
      <div className="social-icons">
        <button>
          <Icon icon="akar-icons:twitter-fill" />
        </button>
        <button>
          <Icon icon="akar-icons:discord-fill" />
        </button>
        <button>
          <Icon icon="ant-design:instagram-filled" />
        </button>
        <button>
          <Icon icon="fa6-brands:tiktok" />
        </button>
        <button>
          <Icon icon="ant-design:youtube-filled" />
        </button>
      </div>
    </Wrapper>
  );
}

export default Welcome;
