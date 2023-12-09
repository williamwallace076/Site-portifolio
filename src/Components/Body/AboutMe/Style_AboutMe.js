import styles from "styled-components"

export const AboutMeSection = styles.section`

    width: 100%;
    height: 130vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--theme-color--gray);

    font-family: var(--theme-font-Poppins);

    @media screen and (max-width: 768px){

        height: 150vh;
        
    }

`

export const AboutMeArea = styles.div`

    width: 100%;
    height:50%;

    margin-top: 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px){
        margin-top: 2rem;
        justify-content: center;
    }

`

export const AboutMeImgArea = styles.div`

width: 25rem;
height: max-content;
display: flex;
flex-direction : row;
align-items: center;
justify-content : center;
position: relative;


@media screen and (max-width: 768px){

    margin-left: -3rem;

}

` 
export const AboutMeImg = styles.img`

width: 15rem;
height: 20rem;
margin-left : 5rem;
margin-top : -3rem;
border-radius: 3px;
box-shadow: -11px 6px 18px -7px rgba(0,0,0,1);
z-index: 5;




` 
export const AboutMeImgBorder = styles.div`

width: 15rem;
height: 20rem;
border-radius: 3px;
border: 6px solid var(--theme-color--red);
position: absolute;
box-shadow: -11px 14px 54px 1px rgba(226,70,102,0.7);
` 



export const SkilsArea = styles.div`

    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;

    padding-left: 3rem;
    box-sizing: border-box;

    h2{
        font-size: 1.8rem;
        margin-bottom: 0;
        margin-top: -2rem;
    }
    h3{
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px){

        align-items: center;

        h2{
            font-size: 2rem;
            margin-top: 2rem;
        }
        h3{
            font-size: 1.5rem;
        }

    }


` 
export const SkilsParagrafsArea = styles.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: left;

    @media screen and (max-width: 768px){

      p{
        font-size: 0.8rem;
      }

    }

` 

export const ParagrafhSkils = styles.div`

    width :100%;
    height: max-content;
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 1rem;

    @media screen and (max-width: 768px){

        margin-top: -1rem;
        
    }


`

export const TempLineArea = styles.div`

    width: 100%;
    height: 40%;

    display: flex;
    flex-direction: column;

    align-items: center;

    padding: 2rem 0rem ;
    gap: 3rem;
    box-sizing: border-box;

    :not(:first-child){
        margin-left: -1px;
    }

    .cicle-area{
        width: max-content;
        height:max-content;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .cicle{
        background-color: transparent;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 10px solid var(--theme-color--red);
        box-sizing: border-box;
    
    }

    .cicle-line{
        width: 20rem;
        height: 5px;
        border:none;
        margin-left: -1px;
        background-color: var(--theme-color--red);
    }

    @media screen and (max-width: 768px){

        width: 80%;
        height: 70%;
        margin-left: auto;
        margin-right: auto;
        flex-direction: row;
        gap: 0;

        :not(:first-child){
            margin-left: 0;
        }

        .cicle-area{
            width: 2rem;
            flex-direction: column;
        }
        
        .cicle{
            width: 1.5rem;
            height: 1.5rem;
            border: 7px solid var(--theme-color--red);
        }

        .cicle-line{
            width: 5px;
            height: 8rem;
            margin-left: 0;
        }

        
    }


`
export const Templine = styles.div`
    
    display:flex;
    flex-direction: row;

    @media screen and (max-width: 768px){

    flex-direction: column;
    width: min-content;
    margin-top: -3.5rem;

    }

`

export const TemplineInfoArea = styles.div`

    width: 100%;
    height: max-content;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    gap: 5rem;

    :first-child{
        margin-right: 2rem;
    }

    
    @media screen and (max-width: 768px){
        gap: 0;
        flex-direction: column;
    }

`
export const TemplineInfoItem = styles.div`

    margin-top: -3rem;
    margin-left: -3rem;
    width: 15rem;
    height: max-content;
    display:flex;
    flex-direction: column;
    text-align: left;
    justify-content:space-between;

    h2{
        margin-bottom: 0;
    }

    p{
        font-size: 0.95rem;
    }
    
    @media screen and (max-width: 768px){

        margin-top: 1rem;
        width: 25rem;
        height: max-content;
        margin-left: 0rem;

        h2{
            margin-top: 0;
        }

        p{
            font-size: 0.85rem;
        }
    }
`

