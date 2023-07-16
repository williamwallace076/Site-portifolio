import { styled } from "styled-components";


export const AreaProejto = styled.div`

background-color : var(--theme-color--gray);
height: 100vh;
width: 100%;

display : flex;

flex-direction : column;

align-items: center;

font-family: var(--theme-font-Poppins);

` 
export const AreaInfoProject = styled.div`

height: 50%;
width: 100%;

display : flex;

flex-direction : row;

align-items: center;
justify-content: center;
gap: 5rem;

.imgteste1{

    position: absolute;

    top: 8.5rem;
    right: 13.5rem;

    width: 19rem;
    height: 12rem;
    z-index: 11;
}
.imgteste3{

    position: absolute;

    top: 12rem;
    right: 34rem;

    width: 10rem;
    height: 12rem;
    z-index: 1;
}
.imgteste2{

    position: absolute;

    top: 16rem;
    right:31rem;

    width: 5rem;
    height: 11rem;
    z-index: 12;
}

` 
export const AreaButtonsProject = styled.div`

height: 50%;
width: 100%;

display : flex;

flex-direction : row;

align-items: center;
justify-content: center;
gap: 5rem;

button{
    border:none;
    width: 8rem;
    height: 2rem;
    
    border-radius: 1rem;

    transition: 0.3s;

    font-family: var(--theme-font-Poppins)
}

button:hover{
    cursor: pointer;
    transform: scale(1.2);
}

` 

export const AreaProjectResponsive = styled.div`

width: max-content;
height: max-content;

display: flex;

flex-direction : row;

align-items: center;
justify-content: center;

`

export const AreaDesktopResponsive = styled.div`

width: max-content;
height: max-content;

display: flex;

flex-direction : row;

align-items: center;
justify-content: center;

position: relative;

`

export const ImgConteinerDesktop = styled.img`

width: 21rem;
height: 15rem;

margin-top: 0rem;
margin-left: -6.4rem;

z-index: 5;

`

export const ImgDesktop = styled.img`

position: absolute;

width: 16.1rem;
height: 10rem;

top: 4.7rem;
left: 14.2rem;

border-radius: 3px;

z-index: 6;

`

export const AreaDeskPhoneResponsive = styled.div`

width: max-content;
height: max-content;

display: flex;

flex-direction : row;

align-items: center;
justify-content: center;

position: relative;

`


export const ImgConteinerDeskPhone = styled.img`

width: 15rem;
height: 17rem;

margin-top: 5rem;
margin-right: -8rem;

z-index: 5;


`
export const ImgDeskPhone = styled.img`

width: 9.1rem;
height: 12rem;

top: 8.5rem;
right: 6.5rem;

z-index: 6;

border-radius: 3px;

position: absolute;

`

export const AreaPhoneResponsive = styled.div`


width: max-content;
height: max-content;

display: flex;

flex-direction : row;

align-items: center;
justify-content: center;

position: relative;


`

export const ImgConteinerPhone = styled.img`

width: 12rem;
height: 15rem;


margin-top: 11rem;

z-index: 8;



`
export const ImgPhone = styled.img`

width: 5.4rem;
height: 11rem;

top: 6.8rem;
right: 17.85rem;

border-radius: 5px;
z-index: 7;

position: absolute;


`
