import React from 'react';
import { AreaButtonsProject, AreaInfoProject, AreaProejto, ImgProjectResponsive } from './Style_AboutProject';

import responsiveImgProject from "./../../assets/imgs/responsiveImg.png";
import imgtestePC from "./../../assets/imgs/Marvel.png";
import imgtestePC2 from "./../../assets/imgs/Pokedex.png";

const AboutProject = () => {
    return ( 
    
    <AreaProejto>

        <AreaInfoProject>

            <div>
                <h2>Nome do projeto</h2>
                <p> informaçoes sobre o projeto <br />Lorem ipsumtis tempore imos assumenda ut <br></br> voluptates ea, repellat dolores!</p>
            </div>

            <img className='imgteste1' src={imgtestePC} alt="" />
            <img className='imgteste2' src={imgtestePC2} alt="" />
            <img className='imgteste3' src={imgtestePC} alt="" />
            <ImgProjectResponsive src={responsiveImgProject}  alt='imagem do projeto'></ImgProjectResponsive>
        
        </AreaInfoProject>


        <AreaButtonsProject>
            <button>Abrir Projeto</button>
            <button>Repositorio</button>
        </AreaButtonsProject>
        
    </AreaProejto>
    
    );
}
 
export default AboutProject;