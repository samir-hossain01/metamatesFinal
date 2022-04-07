import styled from "styled-components";

const Wrapper = styled.div`
background-image: linear-gradient(to top, #1e7be0, #135cc1, #0c3fa2, #062182, #000162);
 padding:30px 0px;

  .footer-nav {
    
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li {
        margin: 15px;
        a {
          text-decoration: none;
          display: inline-block;
          color: #ffffff;
          font-size: 18px;
          text-transform: uppercase;
          transition:0.5s ease-in-out;
          :hover{
            color: #ffec71;
            transform:scale(1.2);
          }
        }
      }
    }
  }
  .social-icons {
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
    margin: 50px 0;
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
      margin-top:30px;
    
    
      :not(:last-child) {
        margin-right: 50px;
        margin-top:30px;
      }

    
      :hover {
        box-shadow: 0px 0px 10px 1px rgba(82, 189, 238, 0.897);
      }
     
    }
  }
  .footer-text {
    text-align: center;
    p {
      line-height: 2;
    }
  }
`;

export default Wrapper;
