import styled from "styled-components";

const Wrapper = styled.div`
  .banner-video {
    .videoContainer {
      max-width: 100vw;
      width: 100%;
      height: 80vh;
      @media (max-width: 650px) {
        height: 60vh;
      }
      @media (max-width: 500px) {
        height: 50vh;
      }
      @media (max-width: 425px) {
        height: 40vh;
      }
      video {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }
`;

export default Wrapper;
