import React, { useEffect } from "react";
import Wrapper from "./Benifits.styled";
// import images
import Benifitimg from "../../images/benifitimg.png";

function Benifits() {
  // scroll spy function
  useEffect(() => {
    function handleScroll() {
      let r = document.querySelectorAll(".text-card");
      // roadmap card opacity function
      r.forEach((item) => {
        let t = item.getBoundingClientRect();
        let v = t.top;
        if (v < 400) {
          item.style.opacity = "1";
        } else {
          item.style.opacity = "0.5";
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <div className="card" id="benifits">
        <div className="card-img">
          <img src={Benifitimg} alt="nft" />
        </div>
        <div className="card-body">
          <div className="title">
            <p>Benifits & Utilities</p>
            <h4>Benifits & Utilities</h4>
          </div>
          <div className="card">
            <div className="text-card-container">


              <div className="text-card">
                <p className="number">B1</p>
                <p className="text">
                After completing your minting, anyone who minted more than 2 NFT can apply for free MMAL custom Tshirts or hats of your wish.
                </p>
              </div>


              <div className="text-card">
                <p className="number">B2</p>
                <p className="text">
                You will be eligible to join our staking platform or stake on platforms we can direct you to for higher annual ROI.
                </p>
              </div>
              <div className="text-card">
                <p className="number">B3</p>
         
                <p className="text">
                You will be given free tickets to join our MMAL success party and NYC and Miami. MMAL Holders with more than 20 MMAL NFT , we will also send you air tickets to join us.
                </p>
              </div>
              <div className="text-card">
                <p className="number">B4</p>
             
                <p className="text">
                As we Collaborate with all Mainstream Brands ( Flight Booking, Car Rentals, Restaurants, Ride sharing, Lounges, Food, Club Memberships, Merchandise) , Holder will automatically start to get discounts on your purchases , bookings, memberships etc.
                </p>
              </div>
              <div className="text-card">
                <p className="number">B5</p>
                <p className="text">
                Single Holder with more than 200 MMAL NFT or a pool of 5 members with 200 MMAL NFT will be invited to join MMAL Governance Board and will be participating on all major milestones of the Project/ Profit Sharing. Also Each Member will be helping groups of holders to facilitate their queries/inputs for areas of Improvement and business development.
                </p>
              </div>

              <div className="text-card">
                <p className="number">B6</p>
             
                <p className="text">
                There will be Occasional MMAL parties to share the success with the community Holders .
                </p>
              </div>

              <div className="text-card">
                <p className="number">B7</p>
                <p className="text">
                All MMAL Holders and past MMAL Holders will be invited to Presale of ‘Metamate’ Coin before launching into Crypto Exchanges like Coinbase, Kucoin, Binance, Crypto.com etc.
                </p>
              </div>

              <div className="text-card">
                <p className="number">B8</p>
                <p className="text">
                All MMAL Holders will be getting starter pack ETH loaded onto their account on MMAL ‘Play to Earn Games’ on Metaverse. Non MMAL Holders , will have to buy ETH and load their account to play.
                </p>
              </div>


              <div className="text-card">
                <p className="number">B9</p>
                <p className="text">
                ALL MMAL Holders with more than 20 MMAL NFT will be offered three month rent free to run their promotions, business launch on Lands we buy on Decentraland, Sandbox etc.
                </p>
              </div>

              <div className="text-card">
                <p className="number">B10</p>
                <p className="text">
                We believe in the power of Charity and the humane responsibility to the make the world a betterplace. We will Donate 10% Profit sharing of the MMAL NFT sale to Ukraine relief funds . All MMAL Holders will be sent a free wrist band to show your support and Love for the people of Ukraine.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    <div className="linear-line"></div>
    </Wrapper>
  );
}

export default Benifits;
