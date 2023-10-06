import React from 'react';
import { ButonArea, ImgProfileArea, ProfileContainer, Tecnologies, TitleArea } from './Style_Main';
import imgProfile from "../../../assets/imgs/imgProfile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import {faSquareJs,faReact,faHtml5, faCss3Alt, faSass, faGithub} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-scroll';


const Main = () => {
    return ( 
        <section>
            <ProfileContainer>
            <TitleArea>
                <h1>Olá, Me chamo William !</h1>
                <h2><span>Desenvolvedor</span> <p>Front-End.</p></h2>

        
                <ButonArea>
                    <Link to='projects' spy={true} smooth={true} offset={50} duration={1000}  >
                        <button id='my-projects' >Meus Projetos</button>
                    </Link>
                    <a href="https://github.com/williamwallace076">
                        <button id='my-repository'>
                            <span>Meu Repositório</span>
                            <FontAwesomeIcon icon={faGithub} size='xl' style={{color:"#fff",}} />
                        </button>
                    </a>
                </ButonArea>
                
            </TitleArea>
            <ImgProfileArea>
                <div className='background-profile-img'>
                    <img src={imgProfile} alt="foto-de-perfil" />
                </div>
                
                <Tecnologies>
                    <FontAwesomeIcon icon={faSquareJs} size="2xl" alt="javasCript-icone" style={{color: "#fff824",}} />
                    <FontAwesomeIcon icon={faReact} size='2xl' style={{color:"#3677e7",}} />
                    <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#fa7900",}} />
                    <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#3677e7",}}  />
                    <FontAwesomeIcon icon={faSass} size="2xl" style={{color: "fff",}} />
                </Tecnologies>
            </ImgProfileArea>
            
            <Link to='about-me' spy={true} smooth={true} offset={10} duration={1000}>
                <FontAwesomeIcon className='arrow' icon={faChevronDown} size="2xl" style={{color: "#fff" }} />
            </Link>
            </ProfileContainer>
        </section>
     );
}
 
export default Main;