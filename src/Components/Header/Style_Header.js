import styled from 'styled-components'

export const HeaderArea = styled.div`
    width: 100%;
    height:4rem;

    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;

    padding: 0rem 1rem ;
    box-sizing:border-box;

    @media screen and (max-width: 768px){

        padding: 0 2rem ;

    }

    @media screen and (max-width: 600px){

        padding: 0;
        padding-left: 3rem;
    
    }


`

export const LogoContainer = styled.div`

    width: 10%;
    height:90%;
    display:flex;
    flex-direction: row;
    text-align:center;
    align-items:center;
    justify-content:space-around;
    font-size: 1.2rem;

`
export const LogoHeader = styled.div`

    width:auto;
    height:auto;
    display:flex;
    flex-direction: column;
    text-align:center;
    justify-content:center;
    font-family: var(--theme-font-Poppins);
    color: #000;
    
    &:hover{
        cursor: pointer;
        color: var(--theme-color--blue);
    }

`

export const SocialIcons = styled.div`

    width: 10%;
    height: 90%;
    text-align:center;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;

    .icon-header{
        transition: 0.2s;
    }

    
    @media screen and (max-width: 600px){

        width: 20%;
    

    }

`

export const IconsLink = styled.a`

color: #000;

&:hover{
    scale: calc(1.2);
    color: var(--theme-color--blue);
}

`
