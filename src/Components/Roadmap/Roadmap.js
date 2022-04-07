import React, { useEffect } from "react";
import { RoadmapData } from "./Roadmap.data";
import Wrapper from "./Roadmap.styled";

function Roadmap() {
  // scroll spy function
  useEffect(() => {
    function handleScroll() {
      let elem = document.querySelector("#line");
      let r = document.querySelectorAll(".roadmap");
      let elem2 = document.querySelector(".inner-line");
      let ycor = elem.getBoundingClientRect();
      let celValue = ycor.top;
      console.log(celValue)
      if (celValue <380 ) {
        elem2.style.height = -celValue /50+ "%";
      } else {
        elem2.style.height = 0 + "%";
      }
      // roadmap card opacity function
      r.forEach((item) => {
        let t = item.getBoundingClientRect();
        let v = t.top;
        if (v <= 400) {
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
            <div  id="line">

</div>

      <div className="section-title" id="roadmap">
        <h2>ROADMAP</h2>
      </div>
      <div className="roadmap-container">
        <div className="line">
          <div className="inner-line"></div>
        </div>
        {RoadmapData.map((item, index) =>
          index % 2 === 0 ? (
            <div className="roadmap" key={item.id}>
              <div className="card-left">
                <h3>{item.title}</h3>
              </div>
              <div className="card-right">
                <p>
                  <strong>{item.descriptionTitle}</strong> {item.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="roadmap" key={item.id}>
              <div className="card-right">
                <p>
                  <strong>{item.descriptionTitle}</strong> {item.description}
                </p>
              </div>
              <div className="card-left">
                <h3>{item.title}</h3>
              </div>
            </div>
          )
        )}
      </div>

    </Wrapper>
    
  );
}

export default Roadmap;
