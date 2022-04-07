import styled from "styled-components";
import SliderBg from "../../images/sliderBg.jpg"
const Wrapper = styled.div`
background: url(${SliderBg});

padding:70px 0px;

  @media (max-width: 992px) {
    margin-top: 30px;
  }
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

    padding:0px 20px;
    @media (max-width: 992px) {
      display: grid;
      grid-template-columns: 1fr;
    }
    .card-body {
    text-align:center;
      color: #ffffff;
      @media (max-width: 992px) {
        text-align: center;
        margin-bottom: 50px;
        padding-left: 0;
        order: 2;
      }
      h4 {
        font-size: 95px;
        text-transform: uppercase;
        font-weight: 700;
        text-shadow: 6px 1px 15px #1e7be0, 1px 2px 22px #92f4af;
        color: #fff000;
        @media (max-width: 1137px) {
          font-size: 70px;
        }
        @media (max-width: 430px) {
          font-size: 50px;
        }
      }
      p {
        margin: 30px 0;
        font-size: 18px;
        line-height: 1.8;
        color: #969697;
      }
      .btn {
        padding-left: 60px;
        padding-right: 60px;
      }
      .counter {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px 0;
        @media (max-width: 992px) {
          justify-content: center;
        }
        button {
          padding: 15px;
          border: 1px solid #356fc9;
          background: transparent;
          outline: none;
          color: #ffffff;
          font-size: 25px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s ease;
          
          :last-child {
            border-radius: 0 10px 10px 0;
          }
          :first-child {
            border-radius: 10px 0 0 10px;
          }
          :hover {
            background: #356fc9;
          }
        }
       
        .inputField {
          padding: 0 60px;
          padding-top: 15px;
          padding-bottom: 12px;
          font-size: 25px;
          border-top: 1px solid #356fc9;
          border-bottom: 1px solid #356fc9;
        }
      }
    }
    .card-img {
      text-align:center;
      padding:0px 0px 0px 20px;
      @media (max-width: 992px) {
        text-align: center;
      }
      img {
        width: 70%;
        border-radius:10px;
        @media (max-width: 992px) {
          width: 50%;
        }
      }
    }
  }
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    button {
      font-size: 33px;
      width: 80px;
      padding: 5px 0;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
      background: #000000;
      color: #ffffff;
      box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.897);
      cursor: pointer;
      transition: 0.3s ease;
      margin: 0 25px;
      margin-top: 50px;
      :hover {
        box-shadow: 0px 0px 10px 1px rgba(82, 189, 238, 0.897);
      }
    }
  }
`;

export default Wrapper;
