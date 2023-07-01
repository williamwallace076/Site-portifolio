import React from 'react';
import "./Style_Formulary";
import { Form } from 'react-router-dom';
import { AreaForm, AreaInputName, ButtonForm, InputItem, Textarea } from './Style_Formulary';

const Formulary = () => {
    return ( 

        <AreaForm> 
            <form>
                <AreaInputName>
                    <InputItem type="text" placeholder='NOME' />
                    <InputItem type="text" placeholder='SOBRENOME' />
                </AreaInputName>
                
                <InputItem type="text" placeholder='ASSUNTO' />
                <Textarea placeholder='Escreva aqui os detalhes !'></Textarea>
                <ButtonForm>Enviar Mensagem</ButtonForm>
            </form>
        </AreaForm>
     );
}
 
export default Formulary;