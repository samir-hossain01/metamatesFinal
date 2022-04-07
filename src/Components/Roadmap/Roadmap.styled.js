import styled from "styled-components";

const Wrapper = styled.div`
 
  margin-top: 100px;
  font-family: "Saira Condensed", sans-serif;
  letter-spacing: 1px;
  background-image: url("../../images/road.png");
  
  @media (max-width: 992px) {
    margin-top: 30px;
  }
  .roadmap-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
    width: 85%;
    @media (max-width: 800px) {
      width: 100%;
    }
    .line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      transform: translateX(-50%);
      width: 3px;
      background-color: rgba(255, 255, 255, 0.15);
      z-index: 1;
      @media (max-width: 800px) {
        display: none;
      }
      .inner-line {
        height: 0%;
        background-image: linear-gradient(to bottom, #0600ff, #0040ff, #005eff, #2d77fe, #568df6, #11a3fd, #00b6fb, #00c7f4, #00dade, #49e6b1, #a6eb7e, #fae65e);
        @media (max-width: 800px) {
          display: none;
        }
      }
    }
    .roadmap {
      display: flex;
      margin-bottom: 100px;
      text-shadow: 3px 3px 19px rgba(255, 0, 183, 89%);
      opacity: 0.5;
      @media (max-width: 800px) {
        flex-direction: column;
        text-align: center;
        margin-bottom: 0;
      }
      :nth-child(odd) {
        @media (max-width: 800px) {
          flex-direction: column-reverse;
        }
      }
      > div {
        min-width: 200px;
        width: 100%;
        padding: 15px 40px;
        margin: 0 15px;
        @media (max-width: 800px) {
          margin: 0;
        }
      }
      .card-left {
        h3{
          color:#fff000;
        }
        position: relative;
        ::after {
          content: "";
          position: absolute;
          left: 0;
          top: 30px;
          width: 20px;
          height: 20px;
          transform: translate(-25px, 10px);
          border-radius: 50%;
          background: #ffffff;
          color:#fff000;
          z-index: 2;
          @media (max-width: 800px) {
            display: none;
          }
        }
        :nth-child(odd) {
          text-align: right;
          color:#fff000;
          :nth-child(even){
            color:#fff000;
          }
          @media (max-width: 800px) {
            text-align: center;
          }
          ::after {
            left: auto;
         
            right: 0;
            transform: translate(25px, 10px);
          }
        }
        h3 {
          font-size: 45px;
          font-family: "Saira Condensed", sans-serif;
        }
      }
      .card-right {
        background: #24313782;
        border-radius: 10px;
        p {
          color:#1E7BE0;
          font-size: 22px;
          @media (max-width: 450px) {
            font-size: 16px;
          }
          strong {
            font-size: 30px;
            @media (max-width: 450px) {
              font-size: 25px;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
