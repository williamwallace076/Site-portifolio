import React from 'react';
import { AreaButtonsProject, AreaDeskPhoneResponsive, AreaDesktopResponsive, AreaInfoProject, AreaPhoneResponsive, AreaProejto, AreaProjectResponsive, ImgConteinerDeskPhone, ImgConteinerDesktop, ImgConteinerPhone, ImgDeskPhone, ImgDesktop, ImgPhone } from './Style_AboutProject';

import desktopForm from "./../../assets/imgs/desktop.png";
import midForm from "./../../assets/imgs/mid.png";
import smallForm from "./../../assets/imgs/small.png";

import imgDesktop from "./../../assets/imgs/netflix.png";
import imgMid from "./../../assets/imgs/netflix-mid.png";
import imgSmall from "./../../assets/imgs/netflix-small.png";


const AboutProject = () => {
    return ( 
    
    <AreaProejto>

        <AreaInfoProject>

            <div>
                <h2>Nome do projeto</h2>
                <p> informaçoes sobre o projeto <br />Lorem ipsumtis tempore imos assumenda ut <br></br> voluptates ea, repellat dolores!</p>
            </div>

            <AreaProjectResponsive >

                <AreaDesktopResponsive>
                    <ImgConteinerDeskPhone src={midForm}  alt='imagem do projeto'></ImgConteinerDeskPhone>
                    <ImgDesktop src={imgDesktop}  alt='imagem do projeto' ></ImgDesktop>
                </AreaDesktopResponsive>
              

                <AreaDeskPhoneResponsive>
                    <ImgConteinerPhone src={smallForm}  alt='imagem do projeto'></ImgConteinerPhone>
                    <ImgDeskPhone src={imgMid}  alt='imagem do projeto'  ></ImgDeskPhone>
                </AreaDeskPhoneResponsive>

                <AreaPhoneResponsive>
                    <ImgConteinerDesktop src={desktopForm}  alt='imagem do projeto'></ImgConteinerDesktop>
                    <ImgPhone src={imgSmall}  alt='imagem do projeto'></ImgPhone>
                </AreaPhoneResponsive>
            </AreaProjectResponsive>
        
        </AreaInfoProject>


        <AreaButtonsProject>
            <button>Abrir Projeto</button>
            <button>Repositorio</button>
        </AreaButtonsProject>
        
    </AreaProejto>
    
    );
}
 
export default AboutProject;