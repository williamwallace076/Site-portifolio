import styles from "styled-components"

export const Item = styles.div`
    width:19rem;
    height:18rem; 
    border: 1px solid #000;
    border-radius : 5px;

    display: flex;
    flex-direction: column;

    background-color: #fff;
    color: #000;
    transition: 0.5s;

    &:hover{
    cursor: pointer;
    transform:scale(1.1);
    box-shadow: 1px 4px 10px 1px rgba(0,0,0,0.54);

    }
    
    

`
export const ImgItem = styles.img`
    width:100%;
    height: 70%;
    border-radius: 3px;
    background-color: #000;

`

export const AreaItemInfo = styles.div`
    width:100%;
    height: 30%;

    border-radius: 5px;


    display: flex;
    flex-direction: column;
    align-items: left;

    padding-left: 1rem;
    box-sizing: border-box;

    h3{
        margin-top: 0.2rem;
        font-size: 1rem;
        margin-bottom: 0;
    }

    p{
        margin-top: 0;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
    }


     @media screen and (max-width: 768px){


        h3{
            font-size: 0.8rem;
        }

        p
        {
            font-size: 0.7rem;
        }

    }

`

export const SeeMoreArea = styles.div`
    width: 100%;
    height: max-content;

    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    

    margin-top: 0;
    margin-bottom: 0.5rem;
    
    .see-more-link{
        width: max-content;
        margin-left: 0.3rem;
    }

    @media and (max-width: 768px){

        justify-content: space-around;
    }


`


export const TecnoItemArea = styles.div`

    width: max-content;
    height: max-content;

    display: flex;
    flex-direction: row;

    gap: 0.5rem;

    

    @media screen and (max-width: 768px){

     .icon-tec{

       font-size: ${props => (props.className == "xl" ? "1.5rem" :"1.7rem")};
       margin-left: -0.2rem;
        
     }
    }
`
export const ButtonItem = styles.button`

    width: 6rem;
    height: 1.5rem;
    background-color: #fff;
    
    font-family: var(--theme-font-Poppins);

    border: 1px solid var(--theme-color--gray);
    border-radius: 1rem;
    margin-right: 1rem;

    transition : 0.3s;

    &:hover{
        cursor: pointer;
        background-color: rgba(177, 177, 177);
        color: #fff;
        box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.54);
    }

    @media screen and (max-width: 768px){

        width: 4.5rem;

    }



`