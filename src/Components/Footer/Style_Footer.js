import styles from "styled-components";

export const FooterArea = styles.section`

width: 100%;
height:8rem;
background-color: var(--theme-color--red);
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


