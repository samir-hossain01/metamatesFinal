import styled from "styled-components";

const Wrapper = styled.div`

  margin: 100px 0px;
  
  @media (max-width: 1024px) {
    margin-top: 0;
  }
  .faq {

    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 20px 50px;
    grid-gap: 30px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
    .left-section {
      margin-top: 40px;
      @media (max-width: 1024px) {
        text-align: center;
      }
      h3 {
        font-size: 45px;
        text-transform: uppercase;
        margin: 10px 0;
        line-height: 1.5;
        @media (max-width: 1225px) {
          font-size: 40px;
        }
        @media (max-width: 1195px) {
          font-size: 30px;
        }
      }
  .Faqs{
    font-size:35px;
    color:#969697;
  }
      p {
        strong {
          font-size: 18px;
          line-height: 2;
        }
      }
      .description {
        margin-top: 15px;
        line-height: 1.9;
        color: #969697;
      }
      a {
        margin-top: 30px;
        padding-left: 60px;
        padding-right: 60px;
        text-decoration:none;
        display:inline-block;
      }
    }
  }
  
  .accordion-container {
    width: 100%;

    background:#1E7BE0;
    box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    overflow: hidden;
    margin-top: 35px;
    padding: 0 40px;
    transition: 0.5s ease-out;
    :hover {
      transform: scale(1.05);
    }
    @media (max-width: 768px) {
      padding: 0 20px;
    }
    .accordion-item {
      background:#1E7BE0;
      color: #fff;
      cursor: pointer;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 20px;
      font-weight: 600;
      transition: 0.4s;
      padding: 35px 0;
      padding-right: 40px;
      position: relative;
      @media (max-width: 600px) {
        font-size: 16px;
      }
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/plus.svg?color=white")
          no-repeat center center / contain;
      }
    }
    .active {
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/minus.svg?color=white")
          no-repeat center center / contain;
      }
    }
    .panel {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      p {
        background:#1E7BE0;
        box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 20px 40px;
        margin-top: 0px;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        @media (max-width: 600px) {
          font-size: 15px;
        }
      }
    }
  }
`;

export default Wrapper;
