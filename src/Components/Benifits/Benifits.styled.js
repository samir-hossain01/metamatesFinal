import styled from "styled-components";

const Wrapper = styled.div`

  margin-top: 50px;
  > .card {
    color: #ffffff;
    display: grid;
    grid-template-columns: 1fr 3fr;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
    .card-img {
      img {
        width: 250px;
        height: 100%;
        @media (max-width: 1024px) {
          width: 200px;
        }
        @media (max-width: 992px) {
          display: none;
        }
      }
    }
    .card-body {
      @media (max-width: 992px) {
        width: 90%;
        margin: auto;
      }
      .title {
        @media (max-width: 992px) {
          text-align: center;
        }
        p {
          font-size: 35px;
          color: #969697;
        }
        h4 {
          font-size: 65px;
          text-transform: uppercase;
          text-shadow: 6px 1px 30px #1e7be0, 1px 2px 22px #92f4af;
          color: #fff000;
          @media (max-width: 450px) {
            font-size: 35px;
          }
        }
      }

      > .card {
        margin-top: 50px;
        .text-card-container {
          .text-card {
            padding-left: 50px;
            padding-bottom: 50px;
            border-left: 5px dashed transparent;
            position: relative;
            opacity: 0.9;
            :not(:last-child) {
              border-left: 1px dashed #969697;
            }
            ::after,
            ::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              transform: translateX(-50%);
              background: #fff000;
              box-shadow: 0px 0px 0px 8px rgba(255, 255, 255, 0.17);
            }
            ::before {
              box-shadow: 0px 0px 0px 15px rgba(255, 255, 255, 0.17);
            }
            :last-child {
              ::after,
              ::before {
                transform: translateX(-70%);
              }
            }
            .number {
              margin-bottom: 15px;
              font-size: 22px;
              color: #fff000;
            }
            h4 {
              margin-bottom: 15px;
              font-size: 28px;
            }
            .text {
              line-height: 1.8;
              color: #969697;
              font-size: large;
              color: #1e7be0;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
