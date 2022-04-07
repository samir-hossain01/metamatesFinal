import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 50px;
  .header {
    text-align: center;
    line-height: 1.7;
    margin-bottom: 30px;
    h1 {
      font-size: 45px;
      text-transform: uppercase;
      text-shadow: 6px 1px 30px #1e7be0, 1px 2px 22px #92f4af;
      color: #E1BE02;
      margin-bottom:30px;
      
      @media (max-width: 800px) {
        font-size: 35px;
      }
      @media (max-width: 650px) {
        font-size: 25px;
      }
      @media (max-width: 360px) {
        font-size: 20px;
      }
    }
    h2 {
      font-size: 50px;
      text-shadow: 0px 0px 33px #00d0ff;
      -webkit-text-stroke: 1.5px #8fb5ef;
      -webkit-text-fill-color: #354b6e;
      @media (max-width: 800px) {
        font-size: 40px;
      }
      @media (max-width: 650px) {
        font-size: 30px;
      }
      @media (max-width: 360px) {
        font-size: 25px;
      }
    }
  }
  .body {
    img {
      width: 100%;
    }
  }
`;

export default Wrapper;
