import React from "react";
import { HashLink } from "react-router-hash-link";
import Wrapper from "./Faq.styled";

function Faq() {
  // accordion open function
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
    // scroll with offset
    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -120;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    };

  return (
    <Wrapper>
      <div className="faq">
        <div className="left-section">
          <p className="Faqs">FAQ</p>
          <h3>Frequently asked questions</h3>
       
 <HashLink  to="/#welcome"
                smooth
                scroll={(el) => scrollWithOffset(el)}
                className="btn welcomeBtn">
Mint Now
 </HashLink>
        </div>
        <div className="faqs-container" id="faq">
          <div className="container-row">
            <div className="row-col">
              <div className="accordion-container">
                <button className="accordion-item" onClick={handleAccordion}>
                When can I buy an MMAL NFT?
                </button>
                <div className="panel">
                  <p>TBD (Around 2nd Week April WL is about to start, followed by Presale 1, 2 and Reveal). Check Socials</p>
                </div>
              </div>
              <div className="accordion-container">
                <button className="accordion-item" onClick={handleAccordion}>
                What will an MMAL NFT enable me to do as a holder?
                </button>
                <div className="panel">
                  <p>It gives immediate store value. You can participate on resell, however we recommend to hold and use them for staking on upcoming projects as per roadmap.</p>
                </div>
              </div>
              <div className="accordion-container" onClick={handleAccordion}>
                <button className="accordion-item">
                Can I own more than one MMAL NFT, and what’s the benefit of owning more than one?{" "}
                </button>
                <div className="panel">
                  <p>Yes you can own more than one MMAL NFT, The long-term benefit is definitely appreciation of valuation. You will be able to stake more NFT for more gains and further MMAL collaboration with brand companies will increase the value. Also as a Holder when we launch ‘MetaApe’ Coin, you will be included on VIP lounge sale.</p>
                </div>
              </div>
              <div className="accordion-container" onClick={handleAccordion}>
                <button className="accordion-item">
                How much does it cost to buy one MMAL NFT?
                </button>
                <div className="panel">
                  <p>TBD, however WL range could be between .09 to .1</p>
                </div>
              </div>

              <div className="accordion-container" onClick={handleAccordion}>
                <button className="accordion-item">
                How do I get on the pre-sale list?
                </button>
                <div className="panel">
                  <p>Check on socials, we will announce Presale 1 register form right after WL is completed.</p>
                </div>
              </div>

              <div className="accordion-container" onClick={handleAccordion}>
                <button className="accordion-item">
                Are there additional fees, such as gas fees?
                </button>
                <div className="panel">
                  <p>We are trying to build our smart contracts to optimize gas prices and also hosting minting from our own server which further reduces 20% gas price. Also our masterpiece Algorithm is going to look for the volatility of price and always pick the best lower gas fee for your transaction. So overall, we standout to reduce 30-40% gas fees compare to all other NFT projects.</p>
                </div>
              </div>

              {/* single item start here */}

              <div className="accordion-container" onClick={handleAccordion}>
                <button className="accordion-item">
                Can I sell my MMAL NFT for a profit?
                </button>
                <div className="panel">
                  <p>Yes you can, but we recommend to hold and enjoy the true benefits in the long run. </p>
                </div>
              </div>


              {/* single item end here */}




              {/* single item start here */}

              <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">
               Do I retain any benefits after I’ve sold or gifted my MMAL NFT?
              </button>
            <div className="panel">
              <p>AS a MMAL NFT alumni, you can still apply for VIP Lounge sale of MetaApe Coin. </p>
              </div>
              </div>


              {/* single item end here */}


              {/* single item start here */}

              <div className="accordion-container" onClick={handleAccordion}>
                <button className="accordion-item">
                Do I get any benefit (referral fee) if I refer my friends who also purchase MMAL NFTs?
                </button>
                <div className="panel">
                  <p>Yes, you will get a free NFT for referring three friends who can purchase MMAL NFTs and you will also get 5% of your friends referrals too. Your friends will be Level 1 and their referral will be level 2. Anybody who are participating on our referral programs can benefit referral fee up to level2. </p>
                </div>
              </div>


              {/* single item end here */}

              
              {/* single item start here */}

              <div className="accordion-container" onClick={handleAccordion}>
                <button className="accordion-item">
                When will the donations go to Ukraine?
                </button>
                <div className="panel">
                  <p>After Reveal and sell out, we will announce our donation channel and the % donated to relief Funds.  </p>
                </div>
              </div>


              {/* single item end here */}


            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Faq;
