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

`

export const AboutMeArea = styles.div`

    width: 100%;
    height:50%;

    margin-top: 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;


`

export const AboutMeImgArea = styles.div`

width: 25rem;
height: max-content;
display: flex;
flex-direction : row;
align-items: center;
justify-content : center;
position: relative;

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
box-shadow: -11px 14px 54px 1px rgba(198,64,66,0.7);
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

` 
export const SkilsParagrafsArea = styles.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: left;
` 

export const ParagrafhSkils = styles.div`

    width :100%;
    height: max-content;
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 1rem;

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
`
export const Templine = styles.div`

    display:flex;
    flex-direction: row;

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

`

