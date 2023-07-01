import styles from "styled-components";


export const AreaForm = styles.div`

    width: 60%;
    height: max-content;
    margin-left: 3rem;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;

        gap: 1rem;

    }

`

export const AreaInputName = styles.div`

width: 100%;
height: max-content;

display: flex;
flex-direction: row;
gap: 3rem;

`
export const InputItem = styles.input`

width: 100%;
height: 2.4rem;

padding-left: 1rem;
box-sizing:border-box;

border: none;
border-radius: 1rem;


`
export const Textarea = styles.textarea`

width: 100%;
height: 10rem;

padding-left: 1rem;
padding-top: 1rem;
box-sizing:border-box;

border: none;
border-radius: 1rem;


`
export const ButtonForm = styles.button`

    width: 9rem;
    height: 2.7rem;
    border: none;
    border-radius: 1.3rem;

    transition: 0.3s;

    &:hover{
        cursor:pointer;
        transform: scale(1.1);
        box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.54);
    }
`