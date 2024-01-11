import styles, { keyframes } from 'styled-components'

const typing = keyframes`


from{
width: 0;
}


`
const blinking = keyframes`


50%{
border-color: transparent;
}


`
export const ProfileContainer = styles.div`
    width: 100%;
    height: 85vh ;
    background:  linear-gradient(169deg, rgba(235,33,15,1) 4%, rgba(255,147,153,1) 28%, rgba(223,12,62,1) 62%, rgba(226,83,70,1) 86%);

    display: flex;
    align-items: center;

    font-family:var(--theme-font-Poppins);
    position : relative;

    .arrow{
        position : absolute;
        bottom : 1rem;
        left: 48%;
        font-size: 3.4rem;

        transition : 0.3s;
    }

    .arrow:hover{
        cursor: pointer;
        transform: scale(1.2);
    }

    @media screen and (max-width: 768px){

        flex-direction: column-reverse;
        justify-content: space-around;

        .arrow{
            left: 45%;
        }
    }
`

export const TitleArea = styles.div`
    width: 40%;
    height: max-content;

    margin-left: 3rem;

    color:#fff;

    h1{
        width: 100%;
        font-size: 2.5rem;
        margin-bottom : 0;
        border-right: 4px solid;
        white-space: nowrap;
        overflow: hidden;

        animation: ${typing} 2.5s steps(23) infinite alternate,
         ${blinking} 0.5s infinite step-end alternate;
    }

    h2{
        width: max-content;
        height: max-content;

        margin-top: 0;
        margin-bottom: 3rem;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;

        gap: 0.5rem;
        

        p{
            width: 8rem;
            height: min-content;
            white-space: nowrap; 
            color: #2ad3e6;
            text-shadow: 0 0 12px #2ad3e6;

            overflow: hidden;
            margin : 0;
            border-right: 3px solid;
            animation: ${typing} 2.5s steps(10) alternate,
            ${blinking} 0.5s infinite step-end alternate;
            
        }
    }

    @media screen and (max-width: 768px){
    
        width:55%;
        margin-left: 0;

        align-items: center;

        h1{
            margin-top: 0;
            font-size: 2rem;
        }

        h2{
            font-size: 1.5rem;
            margin : 0 0 2rem 2rem; 
        }

    }

    
@media screen and (max-width: 600px){

        width: 95%;
       h1{ 
       font-size: 1.8rem;
       }

       h2 { 
       font-size: 1.3rem;
       margin:0;
       margin-bottom: 2rem;
       }
    }
` 
export const ButonArea = styles.div`
    width: 60%;
    height: max-content;

    display:flex;
    flex-direction: row;

    justify-content: center;

    gap: 4rem;

    color:#fff;
    margin-left: 1.1rem;

    a{
        width: max-content;
        height: max-content;
        border-radius : 1rem;
        text-decoration: none;
    }

    button{
        width: 9rem;
        height: 2.5rem;

        border: 1px solid #fff;
        border-radius : 1rem;

        background: transparent;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        transition: 0.3s;
    }

    button#my-repository{
        width: 10rem;
        color: #fff;
        gap: 1rem;
    }
    button#my-projects{
        background-color: var(--theme-color--gray);
        color: var(--theme-color--red);
        font-weight: bolder;
        border: none;
    }

    button:hover{
        cursor:pointer;
        transform: scale(1.2);
    }
    button#my-projects:hover{
        box-shadow: 0px 4px 10px 1px rgba(229,16,41,0.54);
    }
    button#my-repository:hover{
        box-shadow: 0px 4px 10px 1px rgba(255,255,255,0.54);
    }


    @media screen and (max-width: 768px){
        width: 100%;
        margin-left: -1rem;
        margin-bottom: 5rem;
    }

    @media screen and (max-width: 600px){

        margin-left:0;
    }

` 
export const ImgProfileArea = styles.div`

    width: 50%;
    height: 70%;

    display:flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    background-profile-img{
        width: 10em;
        height: 10rem; 
        object-fit: cover;
       
        border-radius: 50%;
        transform: rotate(-40deg);
        box-shadow: 4px 11px 53px -18px #fff;
    }

    img{
        width: 16rem;
        height: 16rem; 
        object-fit: cover;
        object-position: 0rem 0rem;
        border: 4px solid #FFF;

        border-radius:50%;
    }


    @media screen and (max-width: 768px){
    
       
        width: max-content;
        height: max-content;
        margin-top: 2rem;

        background-profile-img{
            
            width: 13rem;
            height: 13rem; 

        }


        img{
            width: 13rem;
            height: 13rem; 
        }

        
    }

    @media screen and (max-width: 600px){
        margin-top: 1rem;
    }

`

export const Tecnologies = styles.div`

    width: 40%;
    height: 3rem;

    display: flex;
    align-items : center;

    justify-content: space-around;
    gap: 1rem;


    @media screen and (max-width: 768px){

        width: 100%;
        font-size: 0.9rem;

    }

`
