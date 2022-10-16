import { useEffect, useState } from "react";
import {Container} from "./body";
import calculadora from "../../../src/images/calculadora-imc.png";
import jogo_memoria from "../../../src/images/jogo-memoria.png";
import urna from "../../../src/images/urna-eletronica.png";
import medicenter from "../../../src/images/medicenter.png";
import starbucks from "../../../src/images/starbucks.png";
import awax from "../../../src/images/awax.png";
import cardapio from "../../../src/images/cardapio-pizza.png";
import arrasta from "../../../src/images/jogo-arraste-e-solte.png";
import breve from "../../../src/images/em-breve.jpg";



export function Body(){
   
   return(
      <Container>
            <div className="container-start">
               <div className="container-left">
                  <h1>Olá, sejam bem-vindos ao meu portifólio</h1>
                  <h2>Aqui mostro um pouco do meu conhecimento e desenvolvimento pessoal e profissional.</h2>
                  <h2>Este projeto foi feito com muito carinho e dedicação espero que gostem.</h2>
               </div>
               <div className="container-rigth">
                  <a href="#about"><div className="frame"></div></a>
               </div>
            </div>
            <div className="container-about" id="about">
               <div className="about-title"><h1>Um pouco sobre mim</h1></div>
               <div className="about-content">
                  <div className="about-left"></div>
                  <div className="about-right">
                     <h2> Meu nome é <strong>Flávio</strong>, tenho 40 anos, moro no Brasil,  especificamente em Itaguaí-RJ. Sou formado em Sistemas de Computação pela Universidade Federal Fluminense (UFF/CEDERJ) em 2021. Meu foco é o desenvolvimento web com HTML, CSS, JavaScript, React e Node. Além da aplicação de metodologias ágeis, como SCRUM.</h2>
                     <h2> Motorista e Operador há 15 anos, atualmente enfrento os desafios de uma transição de carreira levando comigo importantes <i>skills</i> como comprometimento com resultados, trabalho em equipe, comunicação com o público, análise e planejamento de tarefas e foco no trabalho a ser executado. Estou sempre em constante aprendizado, adoro me aventurar em assuntos desconhecidos e variados. Sinta-se livre para me acompanhar e entrar em contato comigo! </h2>
                  </div>
               </div>
               
               
            </div>
            <div className="container-skills" id="skills">
               <div className="skills-title"><h1>Minhas Habilidades</h1></div>
               <div className="skills-content">
                  <div className="skills-grid">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                  </div>
                  <div className="skills-grid">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                  </div>
                  <div className="skills-grid">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                  </div>
                  <div className="skills-grid">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                  </div>
                  <div className="skills-grid">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                  </div>
                  <div className="skills-grid">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  </div>
                  <div className="skills-grid">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                  </div>
                  <div className="skills-grid">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                  </div>
               </div>
               <div className="skills-grid-loading">
                  <div className="skills-loading"></div>
                  <div className="loading-label">Loading</div>
               </div>
            </div>
            <div className="container-projects" id="projects">
               <div className="projects-title"><h1>Meus Projetos</h1></div>
               <div className="container-projects-grid">
                  <a href="https://projeto-calculadora-imc-hazel.vercel.app/" target="_blank">
                     <div className="projects-grid-items">
                        <div className="project-title"><h3>Calculadora IMC</h3></div>
                        <div className="project-image">
                           <img src={calculadora} alt="" />
                        </div>
                        <div className="project-modal">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        </div>
                     </div>
                  </a>
                  <a href="https://projeto-jogo-da-memoria-seven.vercel.app/" target="_blank">
                     <div className="projects-grid-items">
                        <div className="project-title"><h3>Jogo da Memória</h3></div>
                        <div className="project-image"><img src={jogo_memoria} alt="" /></div>
                        <div className="project-modal">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        </div>
                     </div>
                  </a>
                  <a href="https://flavioeds82.github.io/Projeto-Urna-Eletronica/" target="_blank">
                     <div className="projects-grid-items">
                        <div className="project-title"><h3>Urna Eletrônica</h3></div>
                        <div className="project-image"><img src={urna} alt="" /></div>
                        <div className="project-modal">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/>
                        </div>
                     </div>
                  </a>
                  <a href="https://flavioeds82.github.io/Projeto-MediCenter/" target="_blank">
                     <div className="projects-grid-items">
                        <div className="project-title"><h3>MediCenter</h3></div>
                        <div className="project-image"><img src={medicenter} alt="" /></div>
                        <div className="project-modal">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        </div>
                     </div>
                  </a>
                  <a href="https://flavioeds82.github.io/Projeto-StarBucks/" target="_blank">
                     <div className="projects-grid-items">
                        <div className="project-title"><h3>StarBucks</h3></div>
                        <div className="project-image"><img src={starbucks} alt="" /></div>
                        <div className="project-modal">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        </div>
                     </div>
                  </a>
                  <a href="https://flavioeds82.github.io/Projeto--Awax/" target="_blank">
                     <div className="projects-grid-items">
                        <div className="project-title"><h3>Awax Project</h3></div>
                        <div className="project-image"><img src={awax} alt="" /></div>
                        <div className="project-modal">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        </div>
                     </div>
                  </a>
                  <a href="https://flavioeds82.github.io/Projeto-Compra-de-Pizzas/" target="_blank">
                     <div className="projects-grid-items">
                        <div className="project-title"><h3>Cardápio de Pizzas</h3></div>
                        <div className="project-image"><img src={cardapio} alt="" /></div>
                        <div className="project-modal">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/>
                        </div>
                     </div>
                  </a>
                  <a href="https://flavioeds82.github.io/Projeto-Arrasta-e-Solta/" target="_blank">
                     <div className="projects-grid-items">
                        <div className="project-title"><h3>Jogo Arrasta e Solte</h3></div>
                        <div className="project-image"><img src={arrasta} alt="" /></div>
                        <div className="project-modal">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/>
                        </div>
                     </div>
                  </a>
                  <a href="https://github.com/Flavioeds82" target="_blank">
                     <div className="projects-grid-items">
                        <div className="project-title"><h3>Projeto OX</h3></div>
                        <div className="project-image"><img src={breve} alt="" /></div>
                        <div className="project-modal">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/>
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        </div>
                     </div>
                  </a>
                  
                  
               </div>
            </div>
            <div className="container-contact" id="contact">
               <div className="contact-title"><h1>Contato</h1></div>
               <div className="contact-content">
                  <div className="contact-content-left"></div>
                  <div className="contact-content-right">
                     <div className="contact-content-icons">
                        <a href="https://github.com/Flavioeds82" target="_blanck">
                           <div className="contact-icon">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                           </div>
                        </a>
                        <a href="https://www.linkedin.com/in/flavio-eduardo-dias-da-silva/">
                           <div className="contact-icon">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                           </div>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5521998085411&text=Ol%C3%A1%2C%20estou%20vindo%20do%20seu%20portif%C3%B3lio." target="_blanck">
                           <div className="contact-icon">
                              <img src="../../src/images/whats.png" alt="" />
                           </div>
                        </a>
                        <a href="mailto:flavioeds2013@gmail.com" target="_blanck">
                           <div className="contact-icon">
                              <img src="../../src/images/email.png" alt="" />
                           </div>
                        </a>
                        <a href="tel:5521998085411" target="_blanck">
                           <div className="contact-icon">
                              <img src="../../src/images/telefone.png" alt="" />
                           </div>
                        </a>
                     </div>
                     <div className="contact-icon-text"><h3>Fique a vontade para entrar em contato comigo.</h3></div>
                  </div>
               </div>
               
            </div>

      </Container>
      
   )



}