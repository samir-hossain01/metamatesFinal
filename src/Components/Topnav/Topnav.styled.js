import styled from "styled-components";

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 9999;
  .navigation {
    background-image: linear-gradient(to top, #1e7be0, #135cc1, #0c3fa2, #062182, #000162);
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    padding: 0 10px;
    @media (max-width: 1056px) {
      position: relative;
      justify-content: space-between;
      padding: 0 50px;
    }
    @media (max-width: 1056px) {
      padding: 0 10px;
    }
    .nav-logo {
      display: flex;
      justify-content: center;
      transition: 1s ease;
      cursor: pointer;
      :hover {
        transform: scale(1.1);

      }
      
      img{
        width:180px;
      }
      p {
        font-size: 32px;
        font-weight: 700;
        color: #ffffff;
        font-family: "Saira Condensed", sans-serif;
      }
    }
    .nav-link-container {
      display: flex;
      @media (max-width: 1056px) {
        position: absolute;
        left: 0%;
        top: 100%;
        width: 100%;
        height: 0;
        overflow: hidden;
        background: #000000;
        transition: 0.5s ease-out;
      }
      ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media (max-width: 1056px) {
          flex-direction: column;
          margin-left: 50px;
          margin-right: 50px;
          width: 100%;
          padding: 25px 0;
        }
        li {
          margin: 0 15px;
          :last-child {
            margin-right: 0;
          }
          @media (max-width: 1056px) {
            width: 100%;
            margin: 5px 15px;
            text-align: center;
          }
          a {
            text-decoration: none;
            color: #ffffff;
            display: block;
            font-family: "Saira Condensed", sans-serif;
            transition:0.5s ease-in-out;
            :hover {
              color: #ffec71;
              transform:scale(1.2);
            }
            @media (max-width: 1056px) {
              text-align: center;
            }
          }
          button {
          }
          .btn{
            color:#1E7BE0;
            :hover{
              color:white;
              transform:scale(1);
            }
          }

        }
      }
    }
    .mobile-menu {
      display: none;
      @media (max-width: 1056px) {
        display: flex;
        button {
          border: none;
          color: #ffffff;
          font-size: 30px;
          background: transparent;
          cursor: pointer;
        }
      }
    }
  }
`;
export default Wrapper;
