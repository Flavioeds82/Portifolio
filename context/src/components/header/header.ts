import styled from "styled-components";

export const Container = styled.div`
   .container{
      display: flex;
      justify-content: center; 
      align-items: center;
      width: 97%;
      margin-right: 0;
      height: 12vh;
      margin: auto;
      padding: 10px 20px;
      background-color: #6b6bba;
      border-bottom: 1px solid #ADADD8;
      box-shadow: 1px 1px 3px #6b6bba;
      overflow: hidden;
      

      .container-logo{
         width: 40%;

        img{
         width: 25rem;
         height: auto;
         } 
      }
      .container-menu{
         width: 60%;
         color: #ADADD8;
         font-family: 'Poppins', sans-serif;
         font-size: 1.3rem;
         font-weight: bold;
         /* background-color: blue; */
      }
      ul{
         display:flex;
         justify-content: center; 
         align-items: center;
      }
      li{
         margin-left: 3rem;
         list-style-type: none;
         -webkit-transition: all 0.7s ease;
         transition: all 0.7s ease;
      }
      li:hover{
         -webkit-transform: scale(1.2);
         transform: scale(1.2);
      }
      a{
         color: #FFF;
         font-weight: bold;
         
      }
      
      
   }
   @media(max-width:600px){
      .container{
         flex-direction: column;
         width: 100%;
         height: auto;
      }
      .container .container-logo{
         width: 100vw;
         height: auto;
      }
      .container .container-logo img{
         width: 16rem;
         margin: auto;
      }
      .container-menu{
         width: 100%;
         height: auto;
         margin: auto;
         font-size: 15px;
         text-align: center;

      }
      .container-menu ul{
         flex-direction: column;
         margin-right: 50px;
         text-align: left;
      }
      .container li{
         margin: auto;
         /* margin-right: 2.5rem; */
         a{
            margin: auto;
         }
      }
   }

`;