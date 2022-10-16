import { Container } from "./footer";

export function Footer(){
   return(
      <Container>
         <div className="container-footer">
            <div className="footer-buttom"> 
               <a href="https://drive.google.com/file/d/1GhdyLzHJDNrjBU8SkrhSkNIbTV-PJjOK/view?usp=sharing" target="_blanck"><div className="up-bt">Download CV</div></a>
            </div>
            <div className="footer-copy">
               <p> Desenvolvido por Flávio Eduardo.<br/> Todos os direitos reservados.<br/>Copyright &copy; 2022</p>
            </div>
            <div className="footer-buttom">
               <a href="#inicio"><div className="up-bt">Voltar ao topo</div></a>
            </div>
           
          
         </div>
      </Container>
   )
}