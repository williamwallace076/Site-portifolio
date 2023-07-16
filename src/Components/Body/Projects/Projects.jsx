import React from 'react';
import ProjectItem from './ProjectItem/ProjectItem';

import {AreaProjectItem, AreaProjectItemXl, ProjectsGrid, ProjectsSection} from './Style_Projects';

import thumbEcomerce from "../../../assets/imgs/e-comerce.png";
import eComeceDeskotop from "../../../assets/imgs/e-comerceDesktop.png"
import eComeceMid from "../../../assets/imgs/e-comerceMid.png"
import eComeceSmall from "../../../assets/imgs/e-comerceSmall.jpg"


import thumbNetflix from "../../../assets/imgs/netflix.png";
import netflixDesktop from "../../../assets/imgs/netflix.png"
import netflixMid from "../../../assets/imgs/netflix-mid.png"
import netflixSmall from "../../../assets/imgs/netflix-small.png"

import thumbSpotfy from "../../../assets/imgs/spotfy.png";
import thumbFlipBird from "../../../assets/imgs/flipbird.png";
import thumbPokedex from "../../../assets/imgs/pokedex.png";
import thumbTodolist from "../../../assets/imgs/todolist.png";
import thumbMarvel from "../../../assets/imgs/Marvel.png";


import {faSquareJs,faReact,faHtml5, faCss3Alt} from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    return ( 
        <ProjectsSection id= "projects">
            <h2>Projetos</h2>

            <ProjectsGrid>
                <AreaProjectItemXl>
                
                    <ProjectItem classname="xl" title = "E-Commerce ShoppBee"  subtitle = "E-comerce de roupas a acessorios pessoais."
                     link="https://ecomerce-puce.vercel.app/" thumbnail={thumbEcomerce} tec1={faReact} tec2={faHtml5}
                      tec3={faCss3Alt} tec4={faSquareJs} details={{
                        title: "E-Commerce ShoppBee",
                        desc: "E-comerce de roupas a acessorios pessoais.",
                        img_desktop: eComeceDeskotop,
                        img_mid: eComeceMid,
                        img_small: eComeceSmall,
                        websiteLink: "https://ecomerce-puce.vercel.app/",
                        repositoryLink: "https://github.com/williamwallace076/ecomerce",
                        id: 1,
                     }}></ProjectItem>


                    <ProjectItem classname="xl" title = "Netflix Clone"  subtitle= "Clone do Site Netflix com integração da Api 'theMovieDb'."
                     link="https://netflix-clone-swart-sigma.vercel.app/" thumbnail={thumbNetflix}  tec1={faReact} tec2={faHtml5}
                      tec3={faCss3Alt} tec4={faSquareJs} details={{
                        title: "Netflix Clone",
                        desc: "Clone do Site Netflix com integração da Api 'theMovieDb'.",
                        img_desktop: netflixDesktop,
                        img_mid: netflixMid,
                        img_small: netflixSmall,
                        websiteLink: "https://netflix-clone-swart-sigma.vercel.app/",
                        repositoryLink: "https://github.com/williamwallace076/Netflix-clone",
                        id: 2,
                     }} ></ProjectItem>
                    
                </AreaProjectItemXl>

                <AreaProjectItem>

                <ProjectItem classname="mid" title="Spotfy Clone" subtitle="Clone da Landing Page de Planos Do Spotfy" 
                link="https://spotify-clone-eta-three.vercel.app/" thumbnail={thumbSpotfy} tec1={faReact} tec2={faHtml5} tec3={faCss3Alt} tec4={faSquareJs} ></ProjectItem>

                <ProjectItem classname="mid" title="Flappy Bird" subtitle="Jogo Flappy Bird Com Lógica em JS" 
                link="https://flappybirdclone.vercel.app/" thumbnail={thumbFlipBird} tec1={faHtml5} tec2={faCss3Alt} tec3={faSquareJs} ></ProjectItem>

                <ProjectItem classname="mid" title="Pokedex" subtitle="Lista de Cards de Pokemons" 
                link="https://williamwallace076.github.io/Pokedex/" thumbnail={thumbPokedex} tec1={faHtml5} tec2={faCss3Alt} tec3={faSquareJs} ></ProjectItem>

                <ProjectItem classname="mid" title="List de Tarefas" subtitle="Gerenciamento de tarefas pessoais"
                 link="https://todolist-seven-delta.vercel.app/" thumbnail={thumbTodolist} tec1={faReact} tec2={faHtml5} tec3={faCss3Alt} tec4={faSquareJs} ></ProjectItem>
               
               <ProjectItem classname="mid" title="Seleção de personagem" subtitle="Menu de seleção de personagem Marvel"
                 link="https://marvelpelectionplayer.vercel.app/" thumbnail={thumbMarvel} tec1={faHtml5} tec2={faCss3Alt} tec3={faSquareJs}></ProjectItem>


                </AreaProjectItem>

            </ProjectsGrid>

        </ProjectsSection>
     );
}
 
export default Projects;