import React from "react";
import { HashLink } from "react-router-hash-link";
import Wrapper from "./Footer.styled";
// import icons
import { Icon } from "@iconify/react";

function Footer() {
  // scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className="footer-nav">
        <ul>
          <li>
            <HashLink
              to="/#welcome"
              smooth
              scroll={(el) => scrollWithOffset(el)}
            >
              Welcome
            </HashLink>
          </li>
          <li>
            <HashLink to="/#story" smooth scroll={(el) => scrollWithOffset(el)}>
              STORY
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#announcements"
              smooth
              scroll={(el) => scrollWithOffset(el)}
            >
              ANNOUNCEMENTS
            </HashLink>
          </li>
        
          <li>
            <HashLink
              to="/#benifits"
              smooth
              scroll={(el) => scrollWithOffset(el)}
            >
              BENEFITS
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#roadmap"
              smooth
              scroll={(el) => scrollWithOffset(el)}
            >
              APE 2.0 ROADMAP
            </HashLink>
          </li>
          <li>
            <HashLink to="/#team" smooth scroll={(el) => scrollWithOffset(el)}>
              TEAM
            </HashLink>
          </li>
      
          <li>
            <HashLink to="/#faq" smooth scroll={(el) => scrollWithOffset(el)}>
              FAQ
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <button onClick={()=> window.open("https://twitter.com/MMAL_NFT", "_blank")}>
          <Icon icon="akar-icons:twitter-fill" />
        </button>
        <button onClick={()=> window.open("https://discord.gg/nydSsEGAcE", "_blank")}>
          <Icon icon="akar-icons:discord-fill" />
        </button>
        <button onClick={()=> window.open("https://www.instagram.com/metamatesapelounge/", "_blank")}>
          <Icon icon="ant-design:instagram-filled" />
        </button>

        <button>
        <Icon icon="ic:twotone-tiktok" />
        </button>
        <button onClick={()=> window.open("https://www.youtube.com/channel/UChTP8uJwKwOLPy2wBkpCP1g", "_blank")}>
        <Icon icon="bxl:youtube" />
        </button>
      </div>
      <div className="footer-text">
        <p>all right reserved Metamates Ape Lounge</p>
        <p>
          all contents of this website are copyright <span>&copy;</span> 2022
          Metamates Ape Lounge
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
