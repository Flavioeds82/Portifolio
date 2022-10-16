import { Container } from "./header";
import logo from "../../../src/images/logo.gif";

export function Header(){
   return(
      <Container>
         <div className="container">
            <div className="container-logo">
               <img src={logo} alt="" />
            </div>
            <div className="container-menu" id="inicio">
               <nav>
                  <ul>
                     <li><a href="#inicio">Início</a></li>
                     <li><a href="#about">Sobre</a></li>
                     <li><a href="#skills">Habilidades</a></li>
                     <li><a href="#projects">Projetos</a></li>
                     <li><a href="#contact">Contato</a></li>
                  </ul>
               </nav>
            </div>
         </div>
         
         
      </Container>
   )
}