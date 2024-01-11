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


@media screen and (max-width: 600px){

    .project-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

     h2{
        font-size: 1.2rem;
        width: 80%;
     }
     p{
        font-size: 1rem;
     }

    }

    flex-direction : column;
    gap: 0;
    height: max-content;
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



@media screen and (max-width: 600px){

    height: max-content;
    margin: 2rem 0 4rem 0;

    gap:2.5rem;
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

@media screen and (max-width: 600px){

    width: 15rem; 
    height: 10rem;
    
    margin-top: 1.5rem;
    margin-left: -4.4rem;

}

`

export const ImgDesktop = styled.img`

position: absolute;

width: 16.1rem;
height: 10rem;

top: 1.2rem;
right: 3.4rem;

border-radius: 3px;

z-index: 6;

@media screen and (max-width: 600px){

    top: 2.2rem;
    right: 2.3rem;

    width: 11.5rem;
    height: 6.8rem;

}

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

@media screen and (max-width: 600px){

    margin-top: 5rem;
    margin-right: -5.5rem;

    width: 10.5rem;
    height: 13rem;

}

`
export const ImgDeskPhone = styled.img`

width: 9.1rem;
height: 12rem;

top: 6.5rem;
left: 3.5rem;

z-index: 6;

border-radius: 3px;

position: absolute;

@media screen and (max-width: 600px){


    width: 6.4rem;
    height: 9.2rem;

    top: 6.1rem;
    left: 2.4rem;

}

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

@media screen and (max-width: 600px){
    
    margin-top: 8rem;

    width: 7.5rem;
    height: 9rem;

}



`
export const ImgPhone = styled.img`

width: 5.4rem;
height: 11rem;

top: 12.3rem;
right: 3.3rem;

border-radius: 5px;
z-index: 7;
position: absolute;

@media screen and (max-width:600px){

    width: 3.5rem;
    height: 6.5rem;

    
    top: 8.8rem;
    right: 2rem;

}


`
