import styles from "styled-components"

export const ProjectsSection = styles.div`

   width: 100%;
   height: max-content;

   padding: 2rem 0;
   box-sizing: border-box;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items:center;
   background: linear-gradient(0deg, rgba(226,70,102,1) 2%, rgba(229,16,42,1) 67%, rgba(237,0,29,1) 91%);
   font-family: var(--theme-font-Poppins);

   color: #fff;

   h2{
    font-size: 2.5rem;
    margin-bottom: 0;
   }

   @media screen and (max-width: 768px){

    padding: 0;

   }


`

export const ProjectsGrid = styles.div`

width: 90%;
height: max-content;

display: flex;
flex-direction: column;

padding: 3rem 0;

gap: 3rem;

@media screen and (max-width: 768px){

    width: 100%

   }

`

export const AreaProjectItemXl = styles.div`

    width: max-content;
    margin-left: auto;
    margin-right: auto;
    gap: 2rem;

    height: max-content;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;

    .xl{
        width:25rem;
    }

    .xl.netflix .see-more-area{
        
        margin-top: -0.5rem;
    }

    
    @media screen and (max-width: 768px){

        .xl{
            width:18.5rem;
        }
        .xl.netflix{
            p{
                font-size: 0.65rem;
            }
            .see-more-area{
                // bottom: 1rem;
            }
        }

    @media screen and (max-width: 600px){

        flex-direction: column;
    }

        
    }


`

export const AreaProjectItem = styles.div`
    width: max-content;
    height: max-content;
    margin-left: 30rem;
    margin-right: 20rem;

    display: grid;
   

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;


    .mid{
        .seeMore{
            box-sizing: border-box;
            margin: 0.1rem 0.2rem 0 -1rem;
        }
        button{
            width: max-content;
        }
    }


    
   @media screen and (max-width: 768px){


    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);


    .mid{
        
        width:17rem;
    }

   }

   @media screen and (max-width: 600px){

        display : flex; 
        flex-direction : column;
        gap:1rem;
    }


`
