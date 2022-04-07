import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Wrapper from "./Topnav.styled";
import { Icon } from "@iconify/react";

import Mainlogo from "../../images/mainLogo.png";

function Topnav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  // window resize hook
  useEffect(() => {
    // window size hook for sidenav
    function checkScreenSize() {
      if (window.innerWidth > 1056) {
        setMobileMenu(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setMobileMenu]);

  // for mobile sidenav display
  useEffect(() => {
    const navContainer = document.querySelector(".nav-link-container");
    if (mobileMenu) {
      navContainer.style.height = 400 + "px";
    } else {
      navContainer.style.height = 0 + "px";
    }
  }, [mobileMenu]);

  // scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className="navigation">
        <div className="nav-logo">
         <img src={Mainlogo} alt="mainlogo"/>
        </div>
        <div className="nav-link-container">
          <ul>
            <li>
              <HashLink
                to="/#welcome"
                smooth
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                WELCOME
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#story"
                smooth
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                STORY
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#announcements"
                smooth
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                ANNOUNCEMENTS
              </HashLink>
            </li>
          
            <li>
              <HashLink
                to="/#benifits"
                smooth
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                BENEFITS
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#roadmap"
                smooth
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                APE 2.0 ROADMAP
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#team"
                smooth
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                TEAM
              </HashLink>
            </li>
         
            <li>
              <HashLink
                to="/#faq"
                smooth
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                FAQ
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#welcome"
                smooth
                scroll={(el) => scrollWithOffset(el)}
                className="btn"
              >
                mint now
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="mobile-menu">
          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            {mobileMenu ? (
              <Icon icon="akar-icons:cross" />
            ) : (
              <Icon icon="uim:bars" />
            )}
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Topnav;
