import React from "react";
import Wrapper from "./Video.styled";
// import vieos
import BannerVideo from "../../images/nftVideo.mp4";
function Video() {
  return (
    <Wrapper>
      <div className="banner-video">
        <div className="videoContainer">
          <video
            loop
            muted
            autoPlay
            //   onPlay={() => {
            //     setButtonDisplay(true);
            //   }}
            //   onPause={() => {
            //     setButtonDisplay(false);
            //   }}
            //   ref={Videoref}
          >
            <source src={BannerVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </Wrapper>
  );
}

export default Video;
