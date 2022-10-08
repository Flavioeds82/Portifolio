import { Container } from "./footer";

export function Footer(){
   return(
      <Container>
         <div className="container-footer">
            <div className="footer-icons"> 
               <a href=""></a>
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