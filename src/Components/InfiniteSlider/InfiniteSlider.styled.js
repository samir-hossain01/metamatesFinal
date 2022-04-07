import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom:40px;
  @-webkit-keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
  .slider {
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .slider::before,
  .slider::after {
    background: linear-gradient(to right, black 0%, rgb(0 0 0 / 0%) 100%);
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  .slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
  .slider::before {
    left: 0;
    top: 0;
  }
  .slider .slide-track {
    -webkit-animation: scroll 40s linear infinite;
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(250px * 14);
  }
  .slider .slide {
    height: 100px;
    width: 250px;
    margin-top: 25px;
    img {
      width: 80%;
      -webkit-filter: invert(100%);
      filter: invert(100%);
      height: 60px;
      object-fit: contain;
    }
  }
`;

export default Wrapper;
