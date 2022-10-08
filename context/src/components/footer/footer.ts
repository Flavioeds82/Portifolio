import styled from "styled-components";

export const Container = styled.div`
   .container-footer{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 15vh;
      background-color: #6B6BBA;
      padding-top: 2rem;
      color: #fff;

      .footer-copy{

      }
      .footer-buttom{

         .up-bt {
            border: 1px solid #fff;
            border-radius: 10px;
            padding: 10px;
            color: #fff;
         }
         .up-bt:hover{
            background-color: #243762;
         }
      }
   }
   @media screen and (max-width:600px) {
      .container-footer{
         width: 100vw;
         height: auto;
         overflow: hidden;
         flex-direction: column;
         padding-bottom: 2rem;

         .footer-copy{
            width: 90%;
            margin: auto;
         }
      }
   }
`;