import styles from 'styled-components';


export const ContactMeSection = styles.section`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: var(--theme-font-Poppins);
    

    h2{
        margin: 2rem;
    }

`

export const ContactArea = styles.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;

    height: max-content;

    display: flex;
    flex-direction: row;
`

export const ContactInfoArea = styles.div`

    width: 30%;
    height: 30rem;

    padding-left: 1rem;
    padding-bottom: 1rem;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    h3{
        font-size: 1.5rem;
        margin-bottom: 0;
    }
    p{
        font-size: 0.8rem;
    }
`
export const ContactInfo = styles.div`

    width: 100%;
    height: max-content;

    display: flex;
    flex-direction: column;
    gap: 3rem;


`
export const ContactList = styles.div`

    width: 100%;
    height: max-content;

    display: flex;
    flex-direction: column;
    gap: 1rem;


`
export const ItemContactList = styles.div`

    width: 100%;
    height: 4rem;

    display: flex;
    flex-direction: row;

    align-items: center;
    gap: 1rem;

    svg{
        font-size: 2rem;
    }


`

export const ItemContactInfo = styles.div`

    width: 70%;
    height: 100%;

    display: flex;
    flex-direction: column;
    padding-top: 0.7rem;
    box-sizing: border-box;

    h4,p{
        margin: 0;
    }


`

