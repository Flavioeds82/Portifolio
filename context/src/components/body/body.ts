import styled from 'styled-components';

export const Container = styled.div`

   .container-start{
      width: 100%;
      height: 100vh;
      background-image: url("../../src/images/bg.svg");
      background-size: cover;
      display:flex;
      justify-content: center;
      margin-top: 2rem;

      .container-left{
         display: flex;
         flex-direction: column;
         align-items: center;
         width: 45%;
         margin-top: 0px;
         text-align: center;
         
         h1{
            color: #6b6bba;
            font-size: 3rem;
            
         }
         h2{
            color: #6b6bba;
            font-size: 2rem;
            line-height: 2.5rem;
         }
      }
      .container-rigth{
         width: 50vw;
         display: flex;
         flex-direction: column;
         align-items: flex-end;
      }
      .frame{
            width: 10rem ;
            height: 10rem;
            border-radius: 50%;
            background-image: url("../../src/images/foto.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border: 8px solid #6b6bba;
            box-shadow: 1px 1px 5px #000;
            
      }
      .frame:hover{
         border-color: #ADADD8;
      }
      
   }
   .container-about{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 95%;
      background-color: #6b6bba;
      padding: 2rem;
      padding-bottom: 9rem;
      

      .about-title h1{
         color: #fff;
         margin-bottom: 2rem;
      }

      .about-content{
         display: flex;
         justify-content: space-around;
         align-items: center;
         box-shadow: 0 10px 25px rgba(0,0,0,.8);
         padding: 3rem;
         border-radius: 10px;



         .about-left{
            width: 20rem;
            height: 20rem;
            border: 5px solid #fff;
            border-radius: 50%;
            background-image: url("../../src/images/foto-2.jpg");
            background-size: cover;
            background-position: center;
            
         }
         .about-right{
            width: 50%;
            
            h2{
               color: #fff;
            }
         }
      }
      
   }
   .container-skills{
      width: 100%;
      height:100vh;
      color: #3E515A;

      
      

      .skills-content{
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         row-gap: 2.5rem;
         column-gap: 30rem;
         margin: auto;
         justify-content: center;
         align-items: center;
         width: 90%;
         height: 100%;
         background-image: url("../../src/images/bg-2.svg");
         background-repeat: no-repeat;
         background-size: contain;
         background-position: center;
         border-radius: 10px;
         box-shadow: 0 10px 25px rgba(0,0,0,.8);
         padding: 1rem;



         .skills-grid{
            display: flex;
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
            margin: auto;
            justify-content: center;
            align-items: center;
            text-align: center;
            -webkit-transition: all 0.7s ease;
            transition: all 1s ease;
            animation: pulse 5s linear infinite;

            img{
               width: 70%;
               border-radius: 20px;
            }
         }
         
      }
      .skills-grid-loading{
         display: flex;
         font-size: 2.5rem;
         justify-content: center;
         align-items: center;
         margin-top: -120px;
         

         

         .skills-loading{
            width: 3rem;
            height: 3rem;
            margin: 2rem;
            background-image: url("../../src/images/eng.png");
            background-size: cover;
            -webkit-transition: all 0.7s ease;
            transition: all 1s ease;
            animation: loading 5s linear infinite;

            
         }
      }
   }
   .container-projects{
      width: 100%;
      height: 100%;
      margin-top: 15rem ;
      background-color: #6B6BBA;
      color: #fff;
      padding-bottom: 8rem;
      overflow: hidden;


      .projects-title h1{
         padding-top: 3rem;
      }

      .container-projects-grid{
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         gap: 2rem;
         row-gap: 10rem;
         padding: 2rem; 
         justify-content: space-evenly;
         align-items: center;

         .projects-grid-items{
            margin: auto;
            width: 15rem;
            height: 10rem;
            padding:2rem;
            
            
            .project-title h3{
               color: #fff;
            }
            .project-image {
               display: flex;
               justify-content: center;
               align-items: center;
               margin: auto;
               width: 15rem;
               height: 10rem;
               border-radius: 20px;
               box-shadow: 0 20px 50px rgba(0,0,0,.8);
            }
            .project-image:hover{
               box-shadow:
                  inset 0 0 60px whitesmoke,
                  inset 20px 0 80px #f0f,
                  inset -20px 0 80px #0ff,
                  inset 20px 0 300px #f0f,
                  inset -20px 0 300px #0ff,
                  0 0 50px #fff,
                  -10px 0 80px #f0f,
                  10px 0 80px #0ff;
            
            }  
            .project-image img{
               width:100%;
               height: 100%;
               border: 2px solid #FFF;
               border-radius: 15px;
            }
            
            .project-icons{
               color: #fff;
            }
            .project-modal img{
               margin-top: 1rem;
               width: 2.5rem;
               padding-left: .5rem;
            }
                      
         }
         .projects-grid-items:hover{
            -webkit-transition: all 0.7s ease;
            transition: all 0.7s ease;
            transform: scale(1.2);
         }
      }
      
   }
   
   .container-contact{
      text-align: center;
      width: 100%;
      height: 50rem;
      background-image: url("../../src/images/bg-contato-2.svg");
      background-size: cover;
      background-repeat: no-repeat;
      margin: auto;
      margin-top: 0;
      padding-bottom: 50px;

      .contact-title h1{
         margin-top: 0px;
         padding-top: 2rem;
         color: #3E515A;
      }
      .contact-content{
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 0 10rem;
         height: 80vh;

         .contact-content-left{
            width: 50%;
         }
         .contact-content-right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 25rem;
            margin-top: 15rem;

            .contact-content-icons{
               display: flex;
               justify-content: center;
               
               .contact-icon img{
                  width: 50px;
                  height: 50px;
                  margin-left: 2rem;
               }
            }
            .contact-icon:hover{
               -webkit-transition: all 0.7s ease;
               transition: all 0.7s ease;
               transform: scale(1.2);
            }
            .contact-icon-text{
               margin-top: 3rem;
               margin-left: 5rem;
               font-size: 2rem;
               line-height: 2.5rem;
               color: #3E515A;
            }
         }
      }
      
   }


   /* --------------------- Animações ----------------------- */
   
   @keyframes pulse {
         0% {
            transform: scale(1);
	      }
         
         50% {
            transform: scale(1.1);
         }
        
         0% {
            transform: scale(1);
         }

   }

   @keyframes loading {
      to{ transform: rotate(1turn)}
   }
   @keyframes slide-in {
      100% { left: 0 }
}
   
`;