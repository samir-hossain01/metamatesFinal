import styled from "styled-components";
import SliderBg from "../../images/road.jpg"
const Wrapper = styled.div`
  background: url(${SliderBg});
  .section-title {
    margin-bottom: 50px;
  }
  img{
    border-radius: 50%;
  }
  .card-alone {
    max-width: 350px;
    width: 100%;
    text-align: center;
    margin: 50px auto;
    .card-img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: auto;
      margin-bottom: 20px;
      transition: 1s ease;
      :hover {
        box-shadow: 0px 0px 19px 6px #356fc9;
        transition: 1s ease;
        img {
          transform: scale(1.1);
          transition: 1s ease;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .card-body {
      text-transform: capitalize;
      line-height: 1.8;
      p {
        color: #969697;
      }
    }
  }

  .team-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 810px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 650px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 490px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 350px) {
      grid-template-columns: 1fr;
    }
    .card {
      margin: 30px;
      text-align: center;
      padding: 15px 0;
      .card-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: auto;
        margin-bottom: 20px;
        overflow: hidden;
        cursor: pointer;
        transition: 1s ease;
        :hover {
          box-shadow: 0px 0px 19px 6px #356fc9;
          transition: 1s ease;
          img {
            transform: scale(1.1);
            transition: 1s ease;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .card-body {
        text-transform: capitalize;
        line-height: 1.8;
        p {
          color: #969697;
        }
      }
    }
  }
  .discord-container {
    background-color: #0a0a0a;
    border-radius: 30px;
    padding: 20px;
    .card-alone-2 {
      .card-img {
        border-radius: 10px;
        transition: 1s ease;
        :hover {
          box-shadow: 0px 0px 19px 6px rgba(82, 189, 238, 0.897);
          transition: 1s ease;
          img {
            transform: scale(1.1);
            transition: 1s ease;
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .team-container {
      .card-img {
        border-radius: 10px;
      }
    }
  }
`;

export default Wrapper;
