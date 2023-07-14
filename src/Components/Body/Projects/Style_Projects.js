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

   background-color: var(--theme-color--red);

   font-family: var(--theme-font-Poppins);

   color: #fff;

   h2{
    font-size: 2.5rem;
    margin-bottom: 0;
   }


`

export const ProjectsGrid = styles.div`

width: 90%;
height: max-content;

display: flex;
flex-direction: column;

padding: 3rem 0;

gap: 3rem;


`

export const AreaProjectItemXl = styles.div`
width: max-content;
margin-left: auto;
margin-right: auto;
gap: 2rem;

height: max-content;

display: flex;
flex-direction: row;

align-itmens: center;
justify-content: space-around;

.xl{
    width:25rem;
    height: 20rem; 
}


`

export const AreaProjectItem = styles.div`
    width: max-content;
    height: max-content;
    margin-left: auto;
    margin-right: auto;

    display: grid;
   

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;


    .mid{
        .seeMore{
            box-sizing: border-box;
            margin-right:0.5rem;
            margin-top: 0.1rem;
        }
        button{

            width: max-content;
        }
        a{
            width: 2rem;
            margin-left:-1.5rem;
        }
    }
`