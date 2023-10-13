import React from 'react';
import { AboutMeArea, AboutMeImg, AboutMeImgArea, AboutMeImgBorder, AboutMeSection, ParagrafhSkils, SkilsArea, SkilsParagrafsArea, TempLineArea, Templine, TemplineInfoArea, TemplineInfoItem } from "./Style_AboutMe";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLaptopCode, faRocket, faSitemap, faTerminal } from '@fortawesome/free-solid-svg-icons';
import imgProfile from "../../../../src/assets/imgs/imgProfile.jpg";

const AboutMe = () => {
    return ( 
        <AboutMeSection id='about-me'>

            <AboutMeArea>
                <AboutMeImgArea>
                    <AboutMeImg src={imgProfile} alt="Foto do perfil de William Wallace" />
                    <AboutMeImgBorder></AboutMeImgBorder>
                </AboutMeImgArea>

                <SkilsArea>
                    <h2>Sobre Mim</h2>

                    <h3>William Wallce</h3>

                    <SkilsParagrafsArea>
                        <ParagrafhSkils>
                            <FontAwesomeIcon icon={faTerminal} /> 
                            <p> Desenvolvendo Interfaces Web Desde 2022</p>
                        </ParagrafhSkils>
                     
                        <ParagrafhSkils>
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <p>Técnico em Desenvolvimento de Sistemas, graduando em Ciência da Computação</p>
                        </ParagrafhSkils>
                    
                        <ParagrafhSkils>
                            <FontAwesomeIcon icon={faLaptopCode} />
                            <p> Interesse em Desenvolvimento Front-End</p>
                        </ParagrafhSkils>

                        <ParagrafhSkils>
                            <FontAwesomeIcon icon={faRocket} />
                            <p> Buscando oportunidade para atuar como desenvolvedor</p>
                        </ParagrafhSkils>

                    </SkilsParagrafsArea>

                </SkilsArea>

            </AboutMeArea>


            <TempLineArea>

                <Templine>
                    <div className='cicle-area'>
                        <div className="cicle"></div>
                        <div className="cicle-line"></div>
                    </div>
                    <div className='cicle-area'>
                        <div className="cicle" id='2'></div>
                        <div className="cicle-line"></div>
                    </div>
                    <div className='cicle-area'>
                        <div className="cicle"></div>
                        <div className="cicle-line"></div>
                    </div>
                </Templine>

            
                <TemplineInfoArea>
                    <TemplineInfoItem>
                        <h2>2020</h2>
                        <p>Iniciando minha experiência com desenvolvimento durante o ensino médio, estudando lógica de programação com a linguagem "C++".
                            Realizando meu primeiro projeto Web em uma atividade para o meu curso técnico.

                            </p>
                    </TemplineInfoItem>
                    <TemplineInfoItem>
                        <h2>2022</h2>
                        <p>Aprofundando meu conhecimento em desenvolvimento web, utilizando "React Js" e aplicando o que aprendi desenvolvendo projetos pessoais ao longo do ano.
                        </p>
                    </TemplineInfoItem>
                    <TemplineInfoItem>
                        <h2>2023</h2>
                        <p>Iniciando a graduação em Ciência da Computação. Consolidando meu conhecimento em Front-end com integração de APIs , "Sass" e React Js Avançado. 
                            </p>
                    </TemplineInfoItem>
                </TemplineInfoArea>


            </TempLineArea>

        </AboutMeSection>
     );
}
 
export default AboutMe ;