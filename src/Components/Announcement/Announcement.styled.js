import styled from "styled-components";
import SliderBg from "../../images/ann.jpg"
const Wrapper = styled.div`
background: url(${SliderBg});
  .title {
    text-align: center;
    text-transform: uppercase;
   
    color: #969697;
    h3{
      font-size: 45px;
      padding-top: 50px;
  font-family: "Saira Condensed", sans-serif;
  letter-spacing: 1px;
  text-align: center;
  margin: 0px 0;
  text-shadow: 6px 1px 30px #1e7be0, 1px 2px 22px #92f4af;
  color: #fff000;
    }
  }
  .slider-container {
    width: 100%;
    margin: auto;
    .swiper {
      padding: 15px;
      .swiper-wrapper {
        .swiper-slide {
          min-height: 350px;
          color: #ffffff;
          margin-bottom: 50px;
          .card {
            display: grid;
            grid-template-columns: 1fr 4fr;
            align-items: center;
            @media (max-width: 812px) {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .card-img {
              width: 400px;
              @media (max-width: 812px) {
                margin: auto;
                max-width: 400px;
                width: 100%;
              }
              img {
                width: 100%;
              }
            }
            .body {
              margin-left: 30px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              @media (max-width: 812px) {
                margin-top: 25px;
                margin-left: 0;
              }
              h4 {
                font-size: 55px;
                font-weight: 700;
                @media (max-width: 1066px) {
                  font-size: 45px;
                }
                @media (max-width: 960px) {
                  font-size: 35px;
                }
                @media (max-width: 865px) {
                  font-size: 30px;
                }
              }
           
              .subtitle {
                font-size: 18px;
                font-weight: 600;
                line-height: 2;
                @media (max-width: 960px) {
                  font-size: 20px;
                }
                @media (max-width: 865px) {
                  font-size: 18px;
                }
                @media (max-width: 422px) {
                  line-height: 1.2;
                  margin-top: 10px;
                }
              }
              .description {
                font-size: 17px;
                line-height: 1.5;
                margin-top: 15px;
                @media (max-width: 865px) {
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
      .swiper-pagination {
        span {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #ffffff;
        }
        .swiper-pagination-bullet-active {
          background: #356fc9;
        }
      }
    }
  }
`;

export default Wrapper;
