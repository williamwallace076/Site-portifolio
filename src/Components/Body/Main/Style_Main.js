import styles from 'styled-components'

export const ProfileContainer = styles.div`
    width: 100%;
    height: 85vh ;
    background-color: var(--theme-color--red);

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
        transform: scale(1.2)
    }
    
`

export const TitleArea = styles.div`
    width: 40%;
    height: max-content;

    margin-left: 3rem;

    color:#fff;

    h1{
        font-size: 2.5rem;
        margin-bottom : 0;
    }

    h2{
        margin-top: 0;
        margin-bottom: 3rem;
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

        color: #fff;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        transition: 0.3s
    }

    button:hover{
        cursor:pointer;
        transform: scale(1.2)
    }

    :last-child{
        background-color:#fff;
        color: var(--theme-color--red);
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
        width: 16rem;
        height: 16rem; 
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

`

export const Tecnologies = styles.div`

    width: 40%;
    height: 3rem;

    display: flex;
    align-items : center;

    justify-content: space-around;
    gap: 1rem;


`