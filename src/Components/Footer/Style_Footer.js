import styles from "styled-components";

export const FooterArea = styles.section`

width: 100%;
height:8rem;
background: linear-gradient(0deg, rgba(226,70,102,1) 2%, rgba(229,16,42,1) 67%, rgba(237,0,29,1) 91%);
display: flex;
flex-direction : column;
justify-content : center;
align-items: center;

`

export const FooterSosialIcons= styles.div`

width: max-content;
height:max-content;

display: flex;
flex-direction: row;
gap: 1rem;
align-items: center;

.icon-footer{
transition: 0.2s;
}

.icon-footer:hover{
    transform: scale(1.2);
    cursor: pointer;
}

`
export const FooterParagraph = styles.p`

width: 100%;
height: max-content;
display: flex;
margin-bottom: -1rem;
align-items: center;
font-size: 1.1rem;

font-family: var(--theme-font-Poppins);
`


