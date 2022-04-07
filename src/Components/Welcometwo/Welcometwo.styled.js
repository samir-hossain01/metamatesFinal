import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 0px;
  background-image: linear-gradient(to top, #1e7be0, #135cc1, #0c3fa2, #062182, #000162);
 
  
  @media (max-width: 992px) {
    margin-top: 30px;
  }
  .card-2 {
    margin-top: 0px;
    padding: 0px 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .card-video {
      max-height: 100%;
      margin-right: 25px;
      margin-left: 10px;

      @media (max-width: 992px) {
        margin-right: 0;
      }
      div {
        height: 100%;
        video {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
    .card-body {
      @media (max-width: 1024px) {
        margin-top: 30px;
      }
      h5 {
        color: #969697;
        font-size:35px;
      }
      h4 {
        font-size: 65px;
        text-transform: uppercase;
        font-weight: 700;
        text-shadow: 6px 1px 30px #1e7be0, 1px 2px 22px #92f4af;
        color: #fff000;
        @media (max-width: 450px) {
          font-size: 40px;
        }
      }
      p {
        margin: 30px 0;
        font-size: 18px;
        line-height: 1.8;
        color: white;
       
      }
    }
  }
`;

export default Wrapper;
