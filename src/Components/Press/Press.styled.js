import styled from "styled-components";

const Wrapper = styled.div`
  .press-container-one {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .card {
      max-width: 200px;
      width: 100%;
      border-radius: 8px;
      padding: 8px;
      box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.897);
      transition: 1s ease;
      margin: 30px;
      cursor: pointer;
      :hover {
        box-shadow: 0px 0px 10px 1px rgba(82, 189, 238, 0.897);
      }
      img {
        width: 100%;
        height: 60px;
        object-fit:contain;
        filter: invert(100%);
      }
    }
  }
  .press-container-two {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .card {
      max-width: 200px;
      width: 100%;
      border-radius: 8px;
      padding: 8px;
      box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.897);
      transition: 1s ease;
      margin: 30px;
      cursor: pointer;
      :hover {
        box-shadow: 0px 0px 10px 1px rgba(82, 189, 238, 0.897);
      }
      img {
        width: 100%;
        height: 60px;
        object-fit:contain;
        filter: invert(100%);
      }
    }
  }
`;

export default Wrapper;
