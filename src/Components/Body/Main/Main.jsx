import React from 'react';
import { ButonArea, ImgProfileArea, ProfileContainer, Tecnologies, TitleArea } from './Style_Main';
import imgProfile from "../../../assets/imgs/imgProfile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import {faSquareJs,faReact,faHtml5, faCss3Alt, faSass, faGithub} from "@fortawesome/free-brands-svg-icons";



const Main = () => {
    return ( 
        <section>
            <ProfileContainer>
            <TitleArea>
                <h1>Olá, Me chamo William !</h1>
                <h2>Desenvolvedor Front-End.</h2>

        
                <ButonArea>
                    <button>Meus Projetos</button>
                    <a href="https://github.com/williamwallace076">
                        <button>
                            <span>Meu Repositório</span>
                            <FontAwesomeIcon icon={faGithub} size='xl' style={{color:"#3677e7",}} />
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
            
            <FontAwesomeIcon className='arrow' icon={faChevronDown} size="2xl" style={{color: "#b4b4b4",}} />
            </ProfileContainer>
        </section>
     );
}
 
export default Main;