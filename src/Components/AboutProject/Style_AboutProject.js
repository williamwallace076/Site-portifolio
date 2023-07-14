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

export const ImgProjectResponsive = styled.img`

width: 40rem;
height: 25rem;
margin-top: 5rem;

z-index: 10;

`
