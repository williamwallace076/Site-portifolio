import React from 'react';
import ProjectItem from './ProjectItem/ProjectItem';

import {AreaProjectItem, AreaProjectItemXl, ProjectsGrid, ProjectsSection} from './Style_Projects';

import thumbEcomerce from "../../../assets/imgs/e-comerce.png";
import eComeceDeskotop from "../../../assets/imgs/e-comerceDesktop.png"
import eComeceMid from "../../../assets/imgs/e-comerceMid.png"
import eComeceSmall from "../../../assets/imgs/e-comerceSmall.jpg"


import thumbNetflix from "../../../assets/imgs/netflix.png";
import netflixDesktop from "../../../assets/imgs/netflix.png";
import netflixMid from "../../../assets/imgs/netflix-mid.png";
import netflixSmall from "../../../assets/imgs/netflix-small.png";

import thumbSpotfy from "../../../assets/imgs/spotfy.png";
import spotPremiumDesktop from "../../../assets/imgs/spotPremium-desktop.png";
import spotPremiumMid from "../../../assets/imgs/spotPremium-mid.png";
import spotPremiumSmall from "../../../assets/imgs/spotPremium-mid.png";

import thumbFlipBird from "../../../assets/imgs/flipbird.png";


import thumbPokedex from "../../../assets/imgs/pokedex.png";
import pokedexDesktop from "../../../assets/imgs/pokedex-desktop.png";
import pokedexMid from "../../../assets/imgs/pokedex-desktop.png";
import pokedexSmall from "../../../assets/imgs/pokedex-desktop.png";

import thumbTodolist from "../../../assets/imgs/todolist.png";
import todolistDesktop from "../../../assets/imgs/todolist.png";
import todolistMid from "../../../assets/imgs/todolist.png";
import todolistSmall from "../../../assets/imgs/todolist.png";


import thumbMarvel from "../../../assets/imgs/Marvel.png";
import marvelSelectDesktop from "../../../assets/imgs/marvelSelect-desktop.png";
import marvelSelectMid from "../../../assets/imgs/marvelSelect-desktop.png";
import marvelSelectSmall from "../../../assets/imgs/marvelSelect-desktop.png";


import {faSquareJs,faReact,faHtml5, faCss3Alt} from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    return ( 
        <ProjectsSection id= "projects">
            <h2>Projetos</h2>
            

            <ProjectsGrid>
                <AreaProjectItemXl>
                
                    <ProjectItem classname="xl" classTecno="xl" title = "E-Commerce ShoppBee"  subtitle = "E-comerce de roupas a acessorios pessoais."
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


                    {/* <ProjectItem classname="xl netflix" classTecno="xl"  title = "Netflix Clone"  subtitle= "Clone do Site Netflix com integração da Api 'theMovieDb'."
                     link="https://netflix-clone-swart-sigma.vercel.app/" thumbnail={thumbNetflix}  tec1={faReact} tec2={faHtml5}
                      tec3={faCss3Alt} tec4={faSquareJs} details={{
                        title: "Netflix layout",
                        desc: "Prototipo da página inicial isnpirada no layout e desing da empresa Netflix.",
                        img_desktop: netflixDesktop,
                        img_mid: netflixMid,
                        img_small: netflixSmall,
                        websiteLink: "https://netflix-clone-swart-sigma.vercel.app/",
                        repositoryLink: "https://github.com/williamwallace076/Netflix-clone",
                        id: 2,
                     }} ></ProjectItem> */}
                    
                </AreaProjectItemXl>

                <AreaProjectItem>

                <ProjectItem classname="mid" classTecno="mid" title="Spotfy Clone" subtitle="Clone da Landing Page de Planos Do Spotfy" 
                link="https://spotify-clone-eta-three.vercel.app/" thumbnail={thumbSpotfy} tec1={faReact} tec2={faHtml5} tec3={faCss3Alt} tec4={faSquareJs} 
                details={{
                  title: "Spotfy layout",
                  desc: "Prototipo da Landing page isnpirada no layout e desing da empresa Spotfy. ",
                  img_desktop: spotPremiumDesktop,
                  img_mid: spotPremiumMid,
                  img_small: spotPremiumSmall,
                  websiteLink: "https://spotify-clone-eta-three.vercel.app/",
                  repositoryLink: "https://github.com/williamwallace076/spotify-clone",
                  id: 3,
               }} ></ProjectItem>

                {/* <ProjectItem classname="mid" classTecno="mid" title="Flappy Bird" subtitle="Jogo Flappy Bird Com Lógica em JS" 
                link="https://flappybirdclone.vercel.app/" thumbnail={thumbFlipBird} tec1={faHtml5} tec2={faCss3Alt} tec3={faSquareJs} 
                 details={{
                        title: "Netflix Clone",
                        desc: "Clone do Site Netflix com integração da Api 'theMovieDb'.",
                        img_desktop: netflixDesktop,
                        img_mid: netflixMid,
                        img_small: netflixSmall,
                        websiteLink: "https://netflix-clone-swart-sigma.vercel.app/",
                        repositoryLink: "https://github.com/williamwallace076/Netflix-clone",
                        id: 4,
                     }} ></ProjectItem>

                <ProjectItem classname="mid" classTecno="mid" title="Pokedex" subtitle="Lista de Cards de Pokemons" 
                link="https://williamwallace076.github.io/Pokedex/" thumbnail={thumbPokedex} tec1={faHtml5} tec2={faCss3Alt} tec3={faSquareJs} 
                 details={{
                        title: "Pokedex",
                        desc: "Pokedex de listagem de pokemons, projeto do curso DevWeek.",
                        img_desktop: pokedexDesktop,
                        img_mid: pokedexMid,
                        img_small: pokedexSmall,
                        websiteLink: "https://williamwallace076.github.io/Pokedex/",
                        repositoryLink: "https://williamwallace076.github.io/Pokedex/",
                        id: 5,
                     }} ></ProjectItem>

                <ProjectItem classname="mid" classTecno="mid" title="List de Tarefas" subtitle="Gerenciamento de tarefas pessoais"
                 link="https://todolist-seven-delta.vercel.app/" thumbnail={thumbTodolist} tec1={faReact} tec2={faHtml5} tec3={faCss3Alt} tec4={faSquareJs} 
                  details={{
                        title: "ToDo List",
                        desc: "Lista de tarefas, utilizando o gerenciamento de estados com React.",
                        img_desktop: todolistDesktop,
                        img_mid: todolistMid,
                        img_small: todolistSmall,
                        websiteLink: "https://todolist-seven-delta.vercel.app/",
                        repositoryLink: "https://github.com/williamwallace076/TodoList",
                        id: 6,
                     }} ></ProjectItem>
               
               <ProjectItem classname="mid" classTecno="mid" title="Seleção de personagem" subtitle="Menu de seleção de personagem Marvel"
                 link="https://marvelpelectionplayer.vercel.app/" thumbnail={thumbMarvel} tec1={faHtml5} tec2={faCss3Alt} tec3={faSquareJs}
                  details={{
                        title: "Seleção de personagens Marvel",
                        desc: "Simuldador do menu de seleção de personagens da marvel",
                        img_desktop: marvelSelectDesktop,
                        img_mid: marvelSelectMid,
                        img_small: marvelSelectSmall,
                        websiteLink: "https://marvelpelectionplayer.vercel.app/",
                        repositoryLink: "https://github.com/williamwallace076/MarvelSelectionPlayer",
                        id: 7,
                     }} ></ProjectItem> */}
                </AreaProjectItem>

            </ProjectsGrid>
            
            <p id='direitos'>(Todos os sites hospedados aqui não possuem fins comerciais, contendo apenas o propósito de demonstrar ás habilidades de programação do desonvolvedor de criação de Lading pages e Sites, todos os direitos reservados a empresa spotfy)</p>

        </ProjectsSection>
     );
}
 
export default Projects;